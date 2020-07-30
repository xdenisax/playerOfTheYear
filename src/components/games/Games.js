import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameForm from './GameForm/GameForm.js';
import GamesList from './GamesShow/GamesList.js';

const Games = (props) => {
    const { auth } = props;

    if(!auth.uid) return <Redirect to="/"/>
    
    return(
        <div className="overflow-y scroll flex flex-row items-start justify-around ma3" >
            <div className="flex flex-column ">
                <GamesList/>
            </div>
            <div>
                <GameForm/>
            </div>
        </div>
    );
}

const mapStateToProps = ( state ) => { 
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Games);