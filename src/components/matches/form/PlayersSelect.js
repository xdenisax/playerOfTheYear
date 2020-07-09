import React, {Component} from 'react';
import {Select} from 'react-materialize';


const options = {
    classes: '',
    dropdownOptions: {
        alignment: 'right',
        autoTrigger: true,
        closeOnClick: false,
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

const players = ["Denisa", "Andrei", "Nana", "Ioana", "Teo"];

class PlayersSelect extends Component {

    handleChange = (event) =>{
        this.props.handleChange(event);
    }

    render(){ 
        return(
            <Select
                id="players"
                multiple={true}
                onChange={(e) => this.handleChange(e)}
                options={ options }>

                <option disabled value=""> Choose players </option>
                {
                    players.map((player, index) => {
                        return(<option value={player} key={index}>{player}</option>);
                    })
                }

            </Select>
        );
    }
}

export default PlayersSelect;
