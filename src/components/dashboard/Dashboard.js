import React, {Component} from 'react';
import MatchesList from "../matches/MatchesList.js";
import MatchForm from "../matches/MatchForm.js";
import '../logedIn.css';
import NavBar from '../layout/Navbar.js';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <div className="loggedInScreen">
                <NavBar/>
                <div className="loggedInCenterScreen">
                    <div className=" pa2 centerContainer max-height-100 overflow">
                        <div className="row">
                            <div className="w-50">
                                <MatchForm  className="w-50"/>
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