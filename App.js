import React from "react";
import ReactDOM from "react-dom/client";
import FoodLogo from "./Assets/logo.jpg"
const Title = ()=>(
    <a href="/">
        <img className="logo" alt="Logo" src={FoodLogo}/>
    </a>
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

const RestaurantCard =function(){
   return (
    <div className="card">
    <img src={BurgerKing.img}/>
    <h2>{BurgerKing.name}</h2>
    <h3>{BurgerKing.cusines.join(",")}</h3>
    <h4>{BurgerKing.rating} stars</h4>
    </div>
   );
};

const BurgerKing ={
    "name":"BurgerKing",
    "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xofljpukrkkbftsjospa",
    "cusines":["Burger","Fries"],
    "rating":"4.2"
}

const Body =()=>(
    <div className="restaurant-list">
    <RestaurantCard />
       <RestaurantCard/>

   <RestaurantCard/>

   <RestaurantCard/>

   <RestaurantCard/>
    </div>

)

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
