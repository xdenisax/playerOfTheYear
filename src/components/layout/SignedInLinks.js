import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const SignedInLinks = () =>{
    return(
       <ul  className="right">
           <li><NavLink to="/" className="greenText">Games</NavLink></li>
           <li><NavLink to="/" className="greenText">Matches</NavLink></li>
           <li><NavLink to="/" className="greenText">Log out</NavLink></li>
       </ul>
    );
    
}

export default SignedInLinks;