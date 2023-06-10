import React from "react";
import ReactDOM from "react-dom/client";
import FoodLogo from "./Assets/logo.jpg"
const Title = ()=>(
    <img className="logo" alt="Logo" src={FoodLogo}/>
);

const Header = ()=>{
return (
    <div className="Header">
        <Title/>
    <div className= "nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>);
};

const Body =function(){
   return ( <h2>Body</h2>);
};

const Footer = ()=>{
    return(<h3>Footer</h3>);
};

const Applayout= ()=>{
    return(<>
    <Header/>
    <Body/>
    <Footer/>
    </>);
}

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout/>);
