import React, { Component } from 'react';
import MatchesList from './matchesShow/MatchesList.js';
import MatchForm from './form/MatchForm.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Matches extends Component{
    render(){
        const { matches } = this.props;
            
        return(
            <div className="flex flex-row items-start justify-between" >
                <div className="overflow max-height-100 w-40 y-scroll">
                    <MatchesList matches = {matches}  />
                </div>
                <div className="flex content-start w-40">
                    <MatchForm/>
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

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: 'matches', limit: 10, orderBy: ['date', 'desc']}
    ]) 
) (Matches);