import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { updatePassword } from '../../store/actions/authActions';
import { personalDataProcessing } from '../stats/DataProcessing.js';
import './Profile.css'
import '../../assets/Colors.css';
import '../../assets/Fonts.css';


class Profile extends Component{
    state = {
        passwordResetMailSent: false
    }
    
    handleChangePasswordClick = (e) => {
        e.preventDefault();
        this.setState({passwordResetMailSent: true})
        this.props.updatePassword();
    }

    render(){
        const { profile, matches } =this.props;
        const personalProcessedData = personalDataProcessing(matches, profile.alias);
        console.log(personalProcessedData)
        return(
            <div className="centerContainerOverride flex flex-column justify-start">

                <div className="banner"/>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-row">
                        <img src= {`https://robohash.org/${profile.alias}`} className="br-100 h4 w4 dib ba bg-washed-green b--black-05 half-out ml5" alt="Player as a robot"/>
                        <div className="flex flex-column items-start">
                            <p className= "f3 montSerrat dark-green-text ml2 mt1 mb1"> {profile.alias} </p>
                            <p className= "f5 montSerrat black-text ml2 mt0"> {profile.email} </p>
                        </div>
                    </div>

                    <div className="flex flex-column items-end">
                        <p className= "f4 bb montSerrat dark-green-text mr5 mt1 mb1 pointer" onClick={this.handleChangePasswordClick}> Change password </p>
                        {
                            this.state.passwordResetMailSent 
                            ? <p className= "f5 montSerrat dark-red mr1 mt0"> Please check your email. A reset password link was sent there. </p>
                            : ""
                        }
                    </div>
                </div>

                <div className="flex flex-row justify-center">
                    <div  className="bg-transparent br3 pa3 pt1 ma2 grow shadow-5 bw w-50 tc ml5">
                            <h5 className="montSerrat pink-dark-text bb">Personal statistics</h5>
                            <p className= "f4 poiret b black-text mt1 mb1"> Total matches played: </p>
                            <p className= "f5 montSerrat dark-green-text mt0"> {personalProcessedData.totalMatchesPlayed}</p>
                            
                            <p className= "f4 poiret b black-text mt1 mb1"> Wins: </p>
                            <p className= "f5 montSerrat dark-green-text mt0"> {personalProcessedData.numberOfWins}</p>
                            
                            <p className= "f4 poiret b black-text mt1 mb1"> Performance: </p>
                            <p className= "f5 montSerrat dark-green-text mt0"> {`${personalProcessedData.performance}%`}</p>
                            
                            <p className= "f4 poiret b black-text mt1 mb1"> Favourite game(s): </p>
                            <p className= "f5 montSerrat dark-green-text mt0"> {personalProcessedData.favouriteGame.toString()}</p>
                    </div>  
                </div>

            </div>
            
        );
    }
}

const mapStateToProps = ( state ) => {
    return{
        profile: state.firebase.profile,
        matches: state.firestore.ordered.matches
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        updatePassword: (password) => dispatch(updatePassword(password))
    }
}

const startDate = new Date(new Date().getFullYear(), 0, 1);
const endDate = new Date(new Date().getFullYear(), 11, 31);

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    firestoreConnect([
        { collection: 'matches', orderBy: ['date', 'asc'], where: [['date', '>=', startDate ],['date', '<=', endDate ]] }
    ]) 
) (Profile);