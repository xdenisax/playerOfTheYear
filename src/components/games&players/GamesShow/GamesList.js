import React from 'react';
import GameDetails from './GameDetails';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class GamesList extends React.Component{
    render(){
        const { games } = this.props;
        
        return(
            <div >
                {
                    games
                    ? games.length > 0 
                        ? games.map( (game) => {
                            return( <GameDetails game ={ game } key ={game.id} />)
                            })
                        : <h4 className="montSerrat greenText ma2 pa1">No games added yet..</h4>
                    : <h4 className="montSerrat greenText ma2 pa1">No games added yet..</h4>
                }
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return{
        games: state.firestore.ordered.games
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: 'games', orderBy: ['date', 'desc']}
    ]) 
) ( GamesList);