import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createMatch } from '../../../store/actions/matchActions.js'

import GameSelect from './GameSelect.js';
import PlayersSelect from './PlayersSelect.js';
import WinnerSelect from './WinnerSelect.js';

import '../Matches.css'
import '../../../container/Fonts.css';

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

        return(
            <div className="montSerrat greenText flex flex-column items-center ma2 mr3 br3 pa3 shadow-5 bw w-75">
                <h4> Add match </h4>

                <GameSelect handleChange = {this.handleChange}/>
                <PlayersSelect handleChange = {this.handleChange}/>
                <WinnerSelect players= {this.state.players} handleChange = {this.handleChange}/>

                <p className="input-field btn-small greenText transparentBG waves-effect waves-light" 
                    onClick={this.handleSubmit} > 
                    Add match
                </p>
    
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createMatch: (match) => dispatch(createMatch(match))
    }
}

export default connect(null, mapDispatchToProps) (MatchForm);