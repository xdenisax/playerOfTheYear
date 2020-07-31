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


class GameSelect extends Component {

    handleChange = (event) =>{
        this.props.handleChange(event);
    }

    render(){ 
        const { games } = this.props; 
        return(
            <Select
                id="game"
                multiple={false}
                onChange={(e) => this.handleChange(e)}
                options={ options }
                defaultValue= "">

                <option disabled value=""> Choose game </option>
                {
                    games ? 
                        games.map((game, index) => {
                            return(<option value={game.name} key={index}>{game.name}</option>);
                        })
                    :  <option disabled value="">  </option>
                }

            </Select>
        );
    }
}

const mapStateToProps = (state) => { 
    return {
        games : state.firestore.ordered.games
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: 'games', orderBy: ['name', 'asc']}
    ]) 
) (GameSelect);
