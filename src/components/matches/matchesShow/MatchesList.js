import React from 'react';
import MatchesDetails from "./MatchDetails.js";
import '../Matches.css'

const MatchesList = ({matches}) => {
    return(
        <div>
            <h5 className="montSerrat greenText fw6 tc">Matches</h5>
            <div className="matches-list y-scroll" >
            {
                matches
                ? matches.length > 0 
                    ? matches.map(match => {
                        return (<MatchesDetails match = {match} key={match.id}/>)
                        }) 
                    : <h4 className="montSerrat greenText ma2 pa1">No matches yet..</h4>
                : <h4 className="montSerrat greenText ma2 pa1">No matches yet..</h4>
                }
            </div>
        </div>
        
    );
}
export default MatchesList;