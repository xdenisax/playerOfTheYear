import React, { Component } from 'react';
import '../../assets/Fonts.css';
import 'tachyons';

class WelcomePage extends Component{
    render(){
        return(
            <div className="">
                <h2 className="subray">Welcome </h2>
                <p className="montSerrat"> Most games have been won by</p>
                <h1 className="subray"> Denisa </h1>
            </div>
           
        );
    }
}

export default WelcomePage;