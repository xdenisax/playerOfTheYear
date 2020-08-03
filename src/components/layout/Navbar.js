import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import './Navbar.css';
import '../../assets/Fonts.css'

const NavBar = (props) =>{
    return(
        
        <nav className="dt w-100 border-box no-shadows pa1 ph5-ns transparentBG">
            <div className="dtc v-mid link dim w-50">
                <Link to="/" className= "greenText montSerrat big w2 h2 br-100"> <span>The Playground </span> </Link> 
                <span  className= "big" role="img" aria-label="pineapple">🍍</span>
            </div>

            <div className="dtc v-mid w-75 tr ">
                <ul  className="right">
                    <li><NavLink to="/games" className="greenText">Games</NavLink></li>
                    <li><NavLink to="/matches" className="greenText"> Matches</NavLink></li>
                    <li><NavLink to="/stats" className="greenText"> Statistics</NavLink></li>
                    <li> <NavLink to="/profile" className="greenText">{ props.profile.alias }</NavLink></li>
                    <li onClick = {props.signOut}> 
                        <NavLink to="/" className="greenText">Log out</NavLink> 
                    </li>
                </ul>
            </div>
        </nav>
    );   
}

const mapStateToProps = ( state ) => {
    return{
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) =>{ 
    return{
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (NavBar);