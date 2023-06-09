// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App
//Parcel is a beast
/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking - removing unwanted code 
 *
 *
 * Transitive Dependencies
 */



import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id:"title"
    },
    "Hi from Abhinav"

);


const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
