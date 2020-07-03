import React, {Component} from 'react';
import './Matches.css'
import M from 'materialize-css';
import '../../container/Fonts.css';

class MatchForm extends Component{
    state = {
        game:"",
        players: "",
        winner:""
    }

    handleChange = (event) => {
        if(event.target.id === 'players'){
            let playersSet = new Set(this.state.players);
            playersSet.add(event.target.value);
            this.setState({...this.state, [event.target.id]: event.target.value});
        }else{
            this.setState({[event.target.id]: event.target.value});
        }
    };

    handleSubmit = () => {
        console.log(this.state);
    }

    componentDidMount(){
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
                    <select id="game" onChange= {(e) => this.handleChange(e)}>
                        <option value="" disabled selected></option>
                        <option value="Catan">Catan</option>
                        <option value="Monopoly">Monopoly</option>
                        <option value="Azul">Azul</option>
                    </select>
                    <label>Game</label>
                </div>

                <div className="input-field col s12">
                    <select multiple id="players" onChange= {(e) => this.handleChange(e)}>
                        <option value="" disabled selected></option>
                        <option value="Denisa">Denisa</option>
                        <option value="Andrei">Andrei</option>
                        <option value="Nana">Nana</option>
                    </select>
                    <label>Players</label>
                </div>

                <div className="input-field col s12">
                    <select id="winner" onChange= {(e) => this.handleChange(e)}>
                        <option value="" disabled selected></option>
                        <option value="Denisa">Denisa</option>
                        <option value="Andrei">Andrei</option>
                        <option value="Nana">Nana</option>
                    </select>
                    <label>Winner</label>
                </div>

                <a className="input-field btn-small greenText transparentBG waves-effect waves-light" 
                    onClick={this.handleSubmit} > 
                    Add 
                </a>
    
            </div>
        );
    }
}

export default MatchForm;