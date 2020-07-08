import React from 'react';
import "../layout/Navbar.css"
import "../../container/Fonts.css"



const MatchesDetails = ({match}) => {
    console.log(match + "***********")
    let players = "";
    match.players && match.players.map(player  => {
        players.concat(player + " ");
    })

    return(
        <div className="transparentBG br3 pa3 ma2 grow shadow-5 bw">
            <div className="pa3 flex flex-row justify-around items-center">
                <div className="w-50 flex flex-column items-start">
                    <h4 className="montSerrat greenText ma2 pa1">{match.game}</h4>
                    <p className="dosis ma0 pa1">{match.date}</p>
                    <p className="dosis ma0 pa1">{players}</p>
                </div>
                <h4  className="w-50 subray burgundyText">{match.winner}</h4>
            </div>
        </div>
    );
}

export default MatchesDetails;