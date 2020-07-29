import React, { Component } from 'react';
import '../../assets/Fonts.css';
import '../../assets/Colors.css';
import './WelcomePage.css';
import 'tachyons';

class WelcomePage extends Component{
    render(){
        return(
            <div className=" flex flex-column justify-around items-center  ">
                <h2 className="cinzel black-text mt4 ">Welcome </h2>
                <p className="orbitron white-background-color black-text mt6 f4 shadow-5 pa2"> Currenty, most games have been won by</p>
                <h1 className="elite black-text mt2 f1 grow bb"> Denisa </h1>
            </div>
            
           
        );
    }
}

export default WelcomePage;