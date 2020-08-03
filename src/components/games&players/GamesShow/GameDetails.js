import React from 'react';
import "../../../assets/Colors.css";

const GameDetails = (props) =>{
    const { game } = props;
    return(
        <div  className="bg-transparent br3 pa3 pt1 ma2 grow shadow-5 bw">
            <h5 className="montSerrat greenText tl">{game.name}</h5>
            <p className="dosis black-text tl">{`Added at: ${new Date(game.date.seconds*1000).toDateString()}`}</p>
        </div>
    );
}

export default GameDetails;