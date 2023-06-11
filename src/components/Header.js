import { useState } from "react";
import FoodLogo from "../Assets/logo.jpg"

const Title = ()=>(
    <a href="/">
        <img className="logo" alt="Logo" src={FoodLogo}/>
    </a>
);



const Header = ()=>{

    const[isLoggedIn , setLoggedIn]= useState(true);

return (
    <div className="Header">
        <Title/>
    <div className= "nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li>
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