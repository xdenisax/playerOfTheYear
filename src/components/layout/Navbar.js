import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import SignedInLinks from "./SignedInLinks.js";

const NavBar = () =>{
    return(
        
        <nav className="dt w-100 border-box no-shadows pa1 ph5-ns transparentBG">
            <div className="dtc v-mid link dim w-50">
                <Link to="/" className= "greenText big w2 h2 br-100">Player of the year</Link>
            </div>
            <div className="dtc v-mid w-75 tr ">
                <SignedInLinks/>
            </div>
        </nav>
    );
    
}

export default NavBar;