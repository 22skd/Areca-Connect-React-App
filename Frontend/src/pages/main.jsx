import { Link } from "react-router-dom";
const Main =()=>{

    return(
        <main className='main container'>
        
       <div className="maincontent">
       <div className="shadeRound">
          <h1 >ARECA CONNECT</h1>
          
          <div className="user-btn">
            <button ><Link style={{textDecoration:"none"}} to="/login">User</Link></button>
            <button><Link style={{textDecoration:"none"}} to="/CompLogin">Company</Link></button>
            </div>
          </div>
          </div>       
        </main>

    );
}
export default Main;