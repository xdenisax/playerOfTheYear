import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css'
import '../../assets/Colors.css';
import '../../assets/Fonts.css';
import { updatePassword } from '../../store/actions/authActions';


class Profile extends Component{
    state = {
        passwordResetMailSent: false
    }
    
    handleChangePasswordClick = (e) => {
        e.preventDefault();
        this.setState({passwordResetMailSent: true})
        this.props.updatePassword("pass");
    }

    render(){
        const { profile } =this.props;

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
            </div>
            
        );
    }
}

const mapStateToProps = ( state ) => {
    return{
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        updatePassword: (password) => dispatch(updatePassword(password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);