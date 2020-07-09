import React, {Component} from 'react';
import {Select} from 'react-materialize';
import M from 'materialize-css';


const options = {
    classes: '',
    dropdownOptions: {
    alignment: 'right',
    autoTrigger: true,
    closeOnClick: true,
    constrainWidth: true,
    coverTrigger: true,
    hover: false,
    inDuration: 150,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 250
    }
}

const games = ["Catan", "Azul", "Monopoly"];

class GameSelect extends Component {

    handleChange = (event) =>{
        this.props.handleChange(event);
    }

    render(){ 
        return(
            <Select
                id="game"
                multiple={false}
                onChange={(e) => this.handleChange(e)}
                options={ options }
                defaultValue = "Game">

                <option disabled value=""> Choose game </option>
                {
                    games.map((game, index) => {
                        return(<option value={game} key={index}>{game}</option>);
                    })
                }

            </Select>
        );
    }
}

export default GameSelect;
