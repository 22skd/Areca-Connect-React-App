import {useState} from "react"
import { Link } from "react-router-dom";
import Axios from "axios";

const Signup =()=>{
  const url="http://localhost:5000/registerUser"
  const[data,setData]=useState(
    {
        name:"",
        location:"",
        password:"",

    }
  )

  const [message, setMessage] = useState(""); // To store registration status message

  function Submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      location: data.location,
      password: data.password,
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
    // const {name ,setName}=useState();
    // const{email,setEmail}=useState();
    // const{password ,setPassword}=useState();
    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     axios.post('',{name,email,password})
    //     .then(result =>console.log(result))
    //     .catch(err =>console.log(err))
    // }
return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-5 rounded w-25">
    <h2>Register</h2>
    <form onSubmit={(e)=>Submit(e)}>
    <div className="mb-3">
        <label htmlFor="email">
            <strong>name</strong>
        </label>
        <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" 
            placeholder='Name'
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
        <input onChange={(e)=>handle(e)} id="location" value={data.location} type="text" 
            placeholder='location'
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
        <input  onChange={(e)=>handle(e)} id="password" value={data.password} type="password" 
            placeholder='Enter name'
            autoComplete='off'
            name='password'
            className='form-control rounded-0'
            // onChange={(e)=>setPassword(e.target.value)}
        />
    </div>
    <button type="submit" className="btn btn-success w-100 rounded-0">
   Register
</button>

<p>Already Have an Account</p>

<button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
<Link to="/login">login</Link>
</button>
</form>

{message && <p className="text-danger">{message}</p>}

</div>
</div>
)

}

export default Signup;