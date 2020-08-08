import React from 'react';
import PlayerDetails from './PlayersDetails.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Players extends React.Component{
    render(){
        const { players } = this.props;
        
        return(
            <div>
                <h5 className="montSerrat greenText fw6 tc">Players</h5>
                <div className="flex flex-row flex-wrap y-scroll">
                    {
                        players
                        ? players.length > 0 
                            ? players.map( (player) => {
                                return( <div className="w-50" key ={player.alias}><PlayerDetails player ={ player }  /></div>)
                                })
                            : <h5 className="montSerrat greenText ma2 pa1">No players joined yet..</h5>
                        : <h5 className="montSerrat greenText ma2 pa1">No players joined yet..</h5>
                    }
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = ( state ) => {
    return{
        players: state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: 'users', orderBy: ['alias', 'asc']}
    ]) 
) ( Players);