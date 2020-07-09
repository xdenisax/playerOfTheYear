import React from 'react';
import MatchesDetails from "./MatchDetails.js";



const MatchesList = ({matches}) => {
    return(
        <div className="matches-list " >
           {
            matches
            ? matches.map(match => {
                return (<MatchesDetails match = {match} key={match.id}/>)
             })
            : <h4 className="montSerrat greenText ma2 pa1">No matches yet..</h4>
            }
        </div>
    );
}
export default MatchesList;