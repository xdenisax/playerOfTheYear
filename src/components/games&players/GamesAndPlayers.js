import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameForm from './GameForm/GameForm.js';
import GamesList from './GamesShow/GamesList.js';
import Players from './Players/Players.js';
import './GamesPlayers.css';

const GamesAndPlayers = (props) => {
    const { auth } = props;

    if(!auth.uid) return <Redirect to="/"/>
    
    return(
        <div className="overflow-y scroll flex flex-row items-start justify-around ma3" >
            <div className="w-50 ">
                <Players/>
            </div>
            <div className="w-50 flex flex-column">
                <h5 className="montSerrat greenText tc fw6">Games</h5>
                <div  className="flex flex-columns justify-around " >
                    <div className=" flex justify-end items-start">
                        <GameForm/>
                    </div>
                    <div className="w-50 flex flex-column y-scroll break-word">
                        <GamesList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ( state ) => { 
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(GamesAndPlayers);