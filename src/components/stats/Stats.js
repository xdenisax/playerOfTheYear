import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import StatsShow from './StatsShow.js';
import { dataProcessing } from './DataProcessing.js';


class Stats extends React.Component{
    render(){
        const { matches } = this.props;
        const processedData = dataProcessing(matches);

        return(
            <div className="flex flex-column">
                <p className= "pink-dark-text montSerrat big h2 ">Statistics</p>
                <div className="flex flex-row justify-around">
                    <StatsShow title={"Top players"} subtitle={"(by won matches)"} map= {processedData.winsForEachPlayer}/>
                    <StatsShow title={"Top players"} subtitle={"(by number of played matches)"} map= {processedData.matchesPlayedByEachPlayer}/>
                    <StatsShow title={"Top players"} subtitle={"(by perfomance, % won games)"} map= {processedData.playersPerformance}/>
                    <StatsShow title={"Top games"} subtitle={"(by number of played matches)"} map= {processedData.gamesFrequency}/>
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