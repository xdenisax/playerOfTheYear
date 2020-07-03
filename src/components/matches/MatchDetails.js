import React from 'react';
import "../layout/Navbar.css"
import "../../container/Fonts.css"



const MatchesDetails = () => {
    return(
        <div className="transparentBG br3 pa3 ma2 grow shadow-5 bw">
            <div className="pa3 flex flex-row justify-around items-center">
                <div className="w-50 flex flex-column items-start">
                    <h4 className="montSerrat greenText ma0 pa1">Catan</h4>
                    <p className="dosis ma0 pa1">24.06.2020</p>
                    <p className="dosis ma0 pa1">Denisa, Andrei Ioana</p>
                </div>
                <h4  className="w-50 subray burgundyText">Nana</h4>
            </div>
        </div>
    );
}

export default MatchesDetails;