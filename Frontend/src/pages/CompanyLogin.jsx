import { Link } from "react-router-dom";

const CompanyLogin = () =>{
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-5 rounded w-25">
        <h2>login</h2>
        <form>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Company Name</strong>
            </label>
            <input type="text" 
                placeholder='Enter company name'
                autoComplete='off'
                name='userName'
                className='form-control rounded-0'
            />
        </div>
      
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Password</strong>
            </label>
            <input type="password" 
                placeholder='Enter name'
                autoComplete='off'
                name='password'
                className='form-control rounded-0'
             
            />
        </div>
        <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
    <Link to="/Companydash">login</Link>
    </button>
    <p>dont Have an Account</p>
        <button type="submit" className="btn btn-success w-100 rounded-0">
        <Link to="/CompReg">register</Link>
    </button>
    
    
    
   
    </form>
    
    </div>
    </div>
    );
}

export default CompanyLogin;