import React from 'react';
import "../../../assets/Colors.css";
import 'tachyons';

const PlayerDetails = (props) =>{
    const { player } = props;
    
    return(
        <article className="mw5 center bg-light-green br3 pr4 pl4 pa2 mv3 grow shadow-5">
            <div className="tc">
                <img src= {`https://robohash.org/${player.id}`} className="br-100 h4 w4 dib ba bg-washed-green  b--black-05 " alt="Player as a robot"/>
                <h1 className=" montSerrat greenText f3 mb2">{player.alias}</h1>
            </div>

        </article>
    );
}

export default PlayerDetails;