import React from 'react';
import MatchesDetails from "./MatchDetails.js";



const MatchesList = ({matches}) => {
    console.log("&&&&&&&" + matches)
    return(
        <div className="matches-list section w-50" >
           {
            matches !== undefined 
            ?  matches.map(match => {
                console.log(match + "////")
                return (
                    <MatchesDetails match = {match} key={match.id}/>
                )
            })
            : <h3>Nu exista</h3>
           }
        </div>
    );
}
export default MatchesList;