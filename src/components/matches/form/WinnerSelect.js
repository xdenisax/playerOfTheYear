import React, {Component} from 'react';
import {Select} from 'react-materialize';


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


class WinnerSelect extends Component {

    handleChange = (event) =>{
        this.props.handleChange(event);
    }

    render(){ 
        return(
            <Select
                id="winner"
                multiple={false}
                onChange={(e) => this.handleChange(e)}
                options={ options }
                defaultValue = "Winner">

                <option disabled value=""> Choose winner </option>
                {
                    this.props.players && this.props.players.map((player, index) => {
                        return(<option value={player} key={index}>{player}</option>);
                    })
                }

            </Select>
        );
    }
}

export default WinnerSelect;
