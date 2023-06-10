import FoodLogo from "../Assets/logo.jpg"

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


export default Header;