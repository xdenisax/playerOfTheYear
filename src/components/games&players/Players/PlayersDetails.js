import React from 'react';
import "../../../assets/Colors.css";
import 'tachyons';

const PlayerDetails = (props) =>{
    const { player } = props;
    
    return(
        <article className="flex flex-column items-center bg-transparent br3 pa3 pr0 pl0 grow shadow-5">
            <div className="tc">
                <img src= {`https://robohash.org/${player.id}`} className="br-100 h4 w4 dib ba bg-washed-green  b--black-05 " alt="Player as a robot"/>
                <h1 className=" montSerrat greenText f3 mb2">{player.alias}</h1>
                <h2 className="comfortaa gray f5 fw4 mt0">{player.email}</h2>
            </div>
        </article>
    );
}

export default PlayerDetails;