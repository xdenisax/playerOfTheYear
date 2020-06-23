import React, {Component} from 'react';
import Notifications  from './Notifications.js';
import ProjectList from "../matches/MatchesList.js"

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m6 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;