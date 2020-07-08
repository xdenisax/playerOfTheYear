import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Select, InputLabel, Input, MenuItem, Checkbox, ListItemText} from '@material-ui/core'
import { createMatch } from '../../store/actions/matchActions.js'
import './Matches.css'
import M from 'materialize-css';
import '../../container/Fonts.css';
var $ = require( "jquery" );

class MatchForm extends Component{
    state = {
        game:"",
        players: [],
        winner:""
    }

    handleChange = (event) => {
        if(event.target.id === 'players'){
            this.setState({...this.state, [event.target.id]: $('#players').val()});

            // // initialize
            // $('#winner').material_select();
              
            // // setup listener for custom event to re-initialize on change
            // $('#winner').on('contentChanged', function() {
            //   $(this).formSelect();
            // });
          
        
            // for( const player in this.state.players ){
            //     var $newOpt = $("<option>").attr("value",player).text(player)
            //     $("#winner").append($newOpt);
            
            //     // fire custom event anytime you've updated select
            //     $("#winner").trigger('contentChanged');
            // }
            
        }else{
            this.setState({[event.target.id]: event.target.value});
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMatch(this.state);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });
    }

    render(){ 

        return(
            <div className="matchFormContainer montSerrat greenText flex flex-column items-start ma2">
                <h4> Add match </h4>

                <div className="input-field greenText col s12">
                    <select id="game" defaultValue="" onChange= {(e) => this.handleChange(e)}>
                        <option value="" disabled ></option>
                        <option value="Catan">Catan</option>
                        <option value="Monopoly">Monopoly</option>
                        <option value="Azul">Azul</option>
                    </select>
                    <label>Game</label>
                </div>

                <div className="input-field col s12">
                    <select multiple id="players" defaultValue={[]} onChange= {(e) => this.handleChange(e)}>
                        <option disabled ></option>
                        <option value="Denisa">Denisa</option>
                        <option value="Andrei">Andrei</option>
                        <option value="Nana">Nana</option>
                    </select>
                    <label>Players</label>
                </div>

                <div className="input-field col s12">
                    <select id="winner"  defaultValue="" onChange= {(e) => this.handleChange(e)}>
                        <option disabled ></option>
                        {
                            this.state.players.map((player, index) => (
                                <option key={index} value={player}> {player}</option> 
                            ))
                        }
                        <option value="Denisa">Denisa</option>
                        <option value="Andrei">Andrei</option>
                        <option value="Nana">Nana</option>
                    </select>
                    <label>Winner</label>
                </div>

                <p className="input-field btn-small greenText transparentBG waves-effect waves-light" 
                    onClick={this.handleSubmit} > 
                    Add 
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