import React from 'react';
import "../../layout/Navbar.css";
import "../../../assets/Fonts.css";

const MatchesDetails = ({match}) => {

    return(
        <div className="transparentBG br3 pa3 ma2 grow shadow-5 bw">
            <div className="pa3 flex flex-row justify-around items-center">
                <div className="w-50 flex flex-column items-start tl">
                    <h4 className="montSerrat greenText">{match.game}</h4>
                    <p className="dosis black-text ma0 pa1">{ new Date(match.date.seconds*1000).toDateString() }</p>
                    <p className="dosis pink-dark-text ma0 pa1">{match.players.toString()}</p>
                </div>
                <h4  className="w-50 subray burgundyText">{match.winner}</h4>
            </div>
        </div>
    );
}

export default MatchesDetails;