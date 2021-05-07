import React from 'react';
import "../../layout/Navbar.css";
import "../../../assets/Fonts.css";

const MatchesDetails = ({match}) => {

    return(
        <div className="transparentBG br3 pa3 ma2 grow shadow-5 bw">
            <div className=" flex flex-row justify-around items-start break-word">

                <div className=" flex flex-column items-start tl">

                    <h4 className="montSerrat greenText">{match.game}</h4>

                    <div className="flex flex-column ">
                        <p className="dosis black-text ma0 pa1">{ new Date(match.date.seconds*1000).toDateString() }</p>
                        <p className="dosis pink-dark-text ma0 pa1">{match.players.toString()}</p>
                    </div>

                </div>

                <h4  className=" subray  burgundyText tr pa0">{match.winner}</h4>
            </div>
        </div>
    );
}

export default MatchesDetails;