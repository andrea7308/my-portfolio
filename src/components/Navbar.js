import React from "react";
import {Link} from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftside"></div>
            <div className="rightside">
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/projects">Projects</Link>
                <Link to ="/contact">Contact</Link>

                </div>
        </div>
    );
}

export default Navbar