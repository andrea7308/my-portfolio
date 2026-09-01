import React from "react";
import '../styles/Header.css';
import { ReactTyped } from "react-typed";
import myPhoto from "../assets/porfolio image.jpeg"


function Header() {
    return(
        <div>
        <div className="image-container">
        <img src={myPhoto} alt="Profile" className="circular-photo" />
        </div>

        <div>
            <h1>
                {""}
                <ReactTyped strings={["Welcome to my portfolio!"]} typeSpeed={100} loop/>
                
            </h1>
        </div>
        </div>
    );
};


export default Header 