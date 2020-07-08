import React, {Component} from 'react';
import MatchesList from "../matches/MatchesList.js";
import MatchForm from "../matches/MatchForm.js";
import NavBar from '../layout/Navbar.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import '../logedIn.css';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        const { matches } = this.props;

        return(
            <div className="loggedInScreen">
                <NavBar/>
                <div className="loggedInCenterScreen">
                    <div className=" pa2 centerContainer max-height-100 overflow">
                        <div className="row">
                            <div className="w-50">
                                <MatchesList matches = {matches}  className="w-50"/>
                                <MatchForm/>
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        matches: state.firestore.data.matches
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "matches" }
    ])
 )(Dashboard);