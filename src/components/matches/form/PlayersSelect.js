import React, {Component} from 'react';
import {Select} from 'react-materialize';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


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

class PlayersSelect extends Component {

    handleChange = (event) =>{
        this.props.handleChange(event);
    }

    render(){ 
        const { players } = this.props; 
        return(
            <Select
                id="players"
                multiple={true}
                onChange={(e) => this.handleChange(e)}
                options={ options }>

                <option disabled value=""> Choose players </option>
                {
                    players ?
                        players.map((player, index) => {
                            return(<option value={player.alias} key={index}>{player.alias}</option>);
                        })
                    :  <option disabled value="">  </option>

                }

            </Select>
        );
    }
}
const mapStateToProps = (state) => { 
    return {
        players : state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: 'users', orderBy: ['alias', 'asc']}
    ]) 
) (PlayersSelect);
