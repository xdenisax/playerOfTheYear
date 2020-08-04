import React, {Component} from 'react';
import NavBar from '../layout/Navbar.js';
import Matches from '../matches/Matches.js';
import GamesAndPlayers from '../games&players/GamesAndPlayers.js';
import Profile from '../profile/Profile.js';
import WelcomePage from '../welcomePage/WelcomePage.js';
import Stats from '../stats/Stats.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../logedIn.css';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
            
        return(
            <BrowserRouter>
                <Redirect to= "/"/> 

                <div className="loggedInScreen">
                    <NavBar/>
                    <div className="loggedInCenterScreen">
                        <div className=" centerContainer greenText ">
                                <Switch>
                                    <Route path="/" exact component={ WelcomePage }/>
                                    <Route path="/matches" component={ Matches }/>
                                    <Route path="/games" component={ GamesAndPlayers }/>
                                    <Route path="/profile" component= { Profile }/>
                                    <Route path="/stats" component= { Stats }/>
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