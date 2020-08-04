import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import StatsShow from './StatsShow.js';

const sortMap = (map) =>{
   return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
} 

class Stats extends React.Component{
    render(){
        const { matches } = this.props;
        var winsForEachPlayer = new Map();
        var matchesPlayedByEachPlayer = new Map();
        var playersPerformance = new Map();
        var gamesFrequency = new Map();
        
        if(matches){
            matches.forEach( (match) => {
                winsForEachPlayer.has(match.winner) ? winsForEachPlayer.set(match.winner,  winsForEachPlayer.get(match.winner)+1) : winsForEachPlayer.set(match.winner, 1);

                match.players.forEach( (player) => {
                    matchesPlayedByEachPlayer.has(player) ? matchesPlayedByEachPlayer.set(player, matchesPlayedByEachPlayer.get(player)+1) : matchesPlayedByEachPlayer.set(player, 1);
                });
                matchesPlayedByEachPlayer = sortMap(matchesPlayedByEachPlayer);

                gamesFrequency.has(match.game) ? gamesFrequency.set(match.game, gamesFrequency.get(match.game)+1) : gamesFrequency.set(match.game,1);
                gamesFrequency = sortMap(gamesFrequency);
            }); 
            
            Array.from(winsForEachPlayer).forEach ( ([key, value]) => {
                playersPerformance.set(key, ( winsForEachPlayer.get(key) / matchesPlayedByEachPlayer.get(key)*100 ).toFixed(1) );
            })
            playersPerformance = sortMap(playersPerformance);
        }

        return(
            <div className="flex flex-column">
                <p className= "pink-dark-text montSerrat big h2 ">Statistics</p>
                <div className="flex flex-row justify-around">
                    <StatsShow title={"Top players"} subtitle={"(by won matches)"} map= {winsForEachPlayer}/>
                    <StatsShow title={"Top players"} subtitle={"(by number of played matches)"} map= {matchesPlayedByEachPlayer}/>
                    <StatsShow title={"Top players"} subtitle={"(by perfomance, % won games)"} map= {playersPerformance}/>
                    <StatsShow title={"Top games"} subtitle={"(by number of played matches)"} map= {gamesFrequency}/>
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