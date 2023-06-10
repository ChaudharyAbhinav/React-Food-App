import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer"

const Applayout= ()=>{
    return(<>
    <Header/>
    <Body/>

    <Footer/>
    </>);
}

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout/>);
