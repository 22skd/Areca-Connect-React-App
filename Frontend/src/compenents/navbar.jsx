import { Link } from "react-router-dom";
const Navbar =()=>{
return(
<div className="backColor">
<nav className='container' >
             <div className='logo'>
             <img src="/images/plant2.png" alt='brandlogo'/>
             </div>
             <ul >
                <li><a href="/">home</a></li>
                <li><a href="/">menu</a></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/about">about</Link></li>
             </ul>
             <button>Login</button>
            </nav>
</div>
);
}
export default Navbar;