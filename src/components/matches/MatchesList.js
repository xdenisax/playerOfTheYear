import React from 'react';
import MatchesDetails from "./MatchDetails.js";



const MatchesList = () => {
    return(
        <div className="matches-list section w-50" >
           <MatchesDetails/>
           <MatchesDetails/>
           <MatchesDetails/>
           <MatchesDetails/>
           <MatchesDetails/>
           <MatchesDetails/>
        </div>
    );
}
export default MatchesList;