import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createMatch } from '../../../store/actions/matchActions.js'

import GameSelect from './GameSelect.js';
import PlayersSelect from './PlayersSelect.js';
import WinnerSelect from './WinnerSelect.js';

import '../Matches.css'
import '../../../assets/Fonts.css';
import M from 'materialize-css';

var $ = require( "jquery" );

class MatchForm extends Component{

    state = {
        game:"",
        players: [],
        winner:""
    }

    handleChange = (event) => {
        event.target.id === 'players'
        ? this.setState({...this.state, [event.target.id]: $('#players').val()})
        : this.setState({[event.target.id]: event.target.value});  
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMatch(this.state);
    }

    render(){ 
        const { match } = this.props;
        return(
            <div className="montSerrat greenText flex flex-column items-center ma2 mr3 br3 pa3 shadow-5 bw w-75">
                <h4 className= "pink-dark-text "> Add match </h4>

                <GameSelect handleChange = {this.handleChange}/>
                <PlayersSelect handleChange = {this.handleChange}/>
                <WinnerSelect players= {this.state.players} handleChange = {this.handleChange}/>

                <p className="input-field btn-small greenText transparentBG waves-effect waves-light" 
                    onClick={this.handleSubmit} > 
                    Add match
                </p>
                
                {
                    match.result 
                    ? match.result === "Match added"
                        ? <p className="b f5 dark-green-text mt3 montSerrat"> {match.result} </p> 
                        : <p className="b f5 red-text mt3 montSerrat"> {match.result} </p> 
                    :""
                }
            </div>
        );
    }
}

const mapStateToProps = ( state ) =>{ 
    return{
        match: state.match
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createMatch: (match) => dispatch(createMatch(match))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MatchForm);