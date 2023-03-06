import { useState,useEffect } from "react";
import FoodLogo from "../Assets/swiggylogo.png"
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


const Title = ()=>(
    <Link to="/"><img className="logo" alt="TastyTracks Logo" src={FoodLogo} title="TastyTracks"/></Link>

);



const Header = ()=>{

    const[isLoggedIn , setLoggedIn]= useState(true);
    const navigate = useNavigate();


return (
    <div className="Header">
        <Title/>


    <div className= "nav-items">
        <ul>
             <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li style={{color:"white"}}>
                {isLoggedIn ? (
                    <button
                        className="logout-btn"
                        onClick={()=>setLoggedIn(false) }
                    >Logout</button>
                ):(
                    <button className="login-btn" 
                        onClick={()=>setLoggedIn(true)}
                    >Login</button>
                )
                }
            </li>
        </ul>
    </div>
    </div>);
};


export default Header;
