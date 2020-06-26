import React, {Component} from 'react';
import Notifications  from './Notifications.js';
import MatchesList from "../matches/MatchesList.js";
import Navbar from "../layout/Navbar.js";
import '../logedIn.css';
import NavBar from '../layout/Navbar.js';

class Dashboard extends Component{
    render(){
        return(
            <div className="loggedInScreen">
                <NavBar/>
                <div className="loggedInCenterScreen">
                    <div className="centerContainer">
                        <div className="row">
                            <div className="col s12 m6">
                                <MatchesList/>
                            </div>
                            <div className="col s12 m6 offset-m1">
                                {/* <Notifications/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;