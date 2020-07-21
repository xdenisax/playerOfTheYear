import React, {Component} from 'react';
import MatchesList from "../matches/MatchesList.js";
import MatchForm from "../matches/form/MatchForm.js";
import NavBar from '../layout/Navbar.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import '../logedIn.css';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        const { matches, auth } = this.props;

        if(!auth.uid) return <Redirect to ='/'/>
            
        return(
            <div className="loggedInScreen">
                <NavBar/>
                <div className="loggedInCenterScreen">
                    <div className=" pa2 centerContainer container">
                        <div className="flex flex-row items-start justify-between" >
                            <div className="overflow max-height-100 w-40">
                                <MatchesList matches = {matches}  />
                            </div>
                            <div className="flex content-start w-40">
                                <MatchForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        matches: state.firestore.ordered.matches,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'matches', limit: 10, orderBy: ['date', 'desc']}
    ])
 )(Dashboard);