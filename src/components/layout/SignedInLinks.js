import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) =>{
    return(
       <ul  className="right">
           <li><NavLink to="/" className="greenText">Games</NavLink></li>
           <li><NavLink to="/" className="greenText"> Matches</NavLink></li>
           <li onClick = {props.signOut}><NavLink to="/" className="greenText">Log out</NavLink> </li>
       </ul>
    );
    
}

const mapDispatchToProps = (dispatch) =>{ 
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps) (SignedInLinks);