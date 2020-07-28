import React, {Component} from 'react';
import NavBar from '../layout/Navbar.js';
import Matches from '../matches/Matches.js';
import Games from '../games/Games.js';
import Profile from '../profile/Profile.js';
import WelcomePage from '../welcomePage/WelcomePage.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../logedIn.css';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        const { matches, auth } = this.props;
            
        return(
            <BrowserRouter>
                <div className="loggedInScreen">
                    <NavBar/>
                    <div className="loggedInCenterScreen">
                        <div className=" pa2 centerContainer greenText">
                                <Switch>
                                    <Route path="/" exact component={ WelcomePage }/>
                                    <Route path="/matches" component={ Matches }/>
                                    <Route path="/games" component={ Games }/>
                                    <Route path="/profile" component= { Profile }/>
                                </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard);