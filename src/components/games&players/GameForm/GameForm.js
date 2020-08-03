import React from 'react';
import { TextInput, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { createGame } from '../../../store/actions/gamesActions.js'
import '../../../assets/Colors.css'

var buttonStyle = {
    "fontFamily": `'Montserrat', sans-serif`,
    "fontSize": "1em",
    "color": "#006d77",
    "background":"none",
    "borderColor":"#006d77"
  }

class GameForm extends React.Component{
    state = { 
        name:""
    }

    handleInputChange = (event) =>{
        this.setState({[event.target.id]: event.target.value});  
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createGame(this.state);
    }

    render(){
        const { game } = this.props;

        return(
            <div className="bg-transparent montSerrat greenText flex flex-column justify-center items-start br3 pa3 shadow-5 bw w-75">
                <h5> Add game </h5>
                <TextInput
                    id="name"
                    label="game name"
                    onChange = { (event) => this.handleInputChange(event) }
                />
                <Button style={ buttonStyle } node="button" waves="light" onClick={  this.handleSubmit } >
                    Add game
                </Button>

                {
                    game.result 
                    ? game.result === "Game added"
                        ? <p className="b f5 dark-green-text mt3 montSerrat"> {game.result} </p> 
                        : <p className="b f5 red-text mt3 montSerrat"> {game.result} </p> 
                    :""
                }

            </div>
        );
    }
}

const mapStateToProps = ( state ) =>{ 
    return{
        game: state.game
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createGame: ( game ) => dispatch( createGame(game) ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);