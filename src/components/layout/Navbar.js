import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import SignedInLinks from "./SignedInLinks.js";

const NavBar = () =>{
    return(
        <nav className="nav-wrapper transparentBG ">
            <div className="container ">
                <Link to="/" className= "brand-logo greenText">Player of the year</Link>
                <SignedInLinks/>
            </div>
        </nav>
    );
    
}

export default NavBar;