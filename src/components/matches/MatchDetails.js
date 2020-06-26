import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../layout/Navbar.css"

const cardStyle = {
    "background-color": "rgba(0,0,0,0)"
}
const MatchesDetails = () => {
    return(
        <div class="transparentBG dib br3 pa3 ma2 grow shadow-5 bw flex flex-column items-start">
            <div class="pa3 flex flex-column items-start">
                <h4>Catan</h4>
                <p>24.06.2020</p>
                <p>Denisa, Andrei Ioana</p>
            </div>
        </div>
    );
}
export default MatchesDetails;