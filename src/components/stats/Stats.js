import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const sortMap = (map) =>{
   return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
} 

class Stats extends React.Component{
    render(){
        const { matches } = this.props;
        var winsForEachPlayer = new Map();
        var matchesPlayedByEachPlayer = new Map();
        var gamesFrequency = new Map();
        
        if(matches){
            matches.forEach( (match) => {
                winsForEachPlayer.has(match.winner) ? winsForEachPlayer.set(match.winner,  winsForEachPlayer.get(match.winner)+1) : winsForEachPlayer.set(match.winner, 1);

                match.players.forEach( (player) => {
                    matchesPlayedByEachPlayer.has(player) ? matchesPlayedByEachPlayer.set(player, matchesPlayedByEachPlayer.get(player)+1) : matchesPlayedByEachPlayer.set(player, 1);
                });
                matchesPlayedByEachPlayer = sortMap(matchesPlayedByEachPlayer);

                gamesFrequency.has(gamesFrequency) ? gamesFrequency.set(match.game, gamesFrequency.get(match.game)+1) : gamesFrequency.set(match.game,1);
            });    
        }

        return(
            <div className="flex flex-row justify-around">
                <div  className="bg-transparent br3 pa3 pt1 ma2 grow shadow-5 bw">
                    <h5 className="montSerrat greenText tl">Top players</h5>
                    <p className="poiret  black-text tl" >(by won games)</p>
                    {
                        winsForEachPlayer
                        ? Array.from(winsForEachPlayer).map( ([key, value], index) => {
                            return <p className="poiret b black-text tl" key={index}>{`${index + 1}. ${key} - ${value} `}</p>
                          })
                        :<p className="dosis black-text tl">No values</p>  
                    }
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = ( state ) => {
    return{
        matches: state.firestore.ordered.matches
    }
}

const startDate = new Date(new Date().getFullYear(), 0, 1);
const endDate = new Date(new Date().getFullYear(), 11, 31);

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: 'matches', orderBy: ['date', 'asc'], where: [['date', '>=', startDate ],['date', '<=', endDate ]] }
    ]) 
) ( Stats);