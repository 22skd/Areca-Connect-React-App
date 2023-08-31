import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


const CompanyRegister=()=>{
    const url="http://localhost:5000/Compregister"
  const[data,setData]=useState(
    {
        Cname:"",
        Clocation:"",
        Cpassword:"",

    }
  )

  const [message, setMessage] = useState(""); // To store registration status message

  function Submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.Cname,
      location: data.Clocation,
      password: data.Cpassword,
    })
      .then((res) => {
        setMessage("User registered successfully!"); // Set success message
        setData({ name: "", location: "", password: "" }); // Clear form inputs
      })
      .catch((error) => {
        setMessage("Error registering user."); // Set error message
        console.error(error);
      });
  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }

  
return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-5 rounded w-25">
    <h2>Register</h2>
    <form onSubmit={(e)=>Submit(e)}>
    <div className="mb-3">
        <label htmlFor="email">
            <strong>company name</strong>
        </label>
        <input onChange={(e)=>handle(e)} id="Cname" value={data.Cname} type="text" 
            placeholder='Enter name'
            autoComplete='off'
            name='name'
            className='form-control rounded-0'
            // onChange={(e)=>setName(e.target.value)}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="email">
            <strong>location</strong>
        </label>
        <input onChange={(e)=>handle(e)} id="Clocation" value={data.Clocation} type="place" 
            placeholder='Enter location'
            autoComplete='off'
            name='location'
            className='form-control rounded-0'
            // onChange={(e)=>setEmail(e.target.value)}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="email">
            <strong>Password</strong>
        </label>
        <input onChange={(e)=>handle(e)} id="Cpassword" value={data.Cpassword} type="password" 
            placeholder='Enter name'
            autoComplete='off'
            name='password'
            className='form-control rounded-0'
            
        />
    </div>
    <button type="submit" className="btn btn-success w-100 rounded-0">
   Register
</button>

<p>Already Have an Account</p>

<button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
<Link to="/CompLogin">login</Link>
</button>
{message && <p className="text-danger">{message}</p>}
</form>

</div>
</div>
)

}

export default CompanyRegister;