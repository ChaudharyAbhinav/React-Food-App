import React from "react";
import ReactDOM from "react-dom/client";


const Intro = (
    <h1> Hi i am a react element</h1>
);

const HeadComponent = ()=>{
    return <div><h1>I am HeadComponent</h1></div>;
};

const HeadComponent2 = ()=>{
    return (
    <div>
        <h1>I am HeadComponent2</h1>
    </div>
);
};

const HeadComponent3=()=>(
    <div>
        <h1>I am HeadComponent3</h1>
    </div> 
);

// const data = api.getData();
const HeadComponent4 = function(){
    return(
    <div>
            {/* For React Element */}
        {Intro} 
        {/* For React Componenet */}
        <HeadComponent2/> 
        {/* or for react component we can write */}
        {HeadComponent3()}
        <h1>Abhinav asdad</h1>
    </div>
    );
};


var xyz = 10;
const Display = ()=>{
    return (
        <>
        {/* YOu can write any javascript code within {}  */}
        {1 + 2}
        {xyz}
        </>
    );
};

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<Display/>);
