import React from 'react';
import {Link} from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import 'tachyons';
import "./SignUp.css"

var buttonStyle= {
  "fontFamily": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "color": "#006d77",
  "background":"none",
  "borderColor":"#006d77",
  "float":'left'
}

class SignUpForm extends React.Component {
    constructor(){
        super();
        this.state = {
            alias:"",
            email:"",
            password:"",
            confirmedPassword:"",
        }
    }


    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.signUp(this.state);
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        });
    }

  render(){

    const {  authError } = this.props;
    
    return(
      <div className="flex flex-column items-end w-100 " >
        <div className="formInputs fl w-25 flex flex-column items-end ma6"> 
        
            <p className="ma1 f3 mb4 titleStyle"> Registration </p>

            <div className="w-100 flex flex-column items-end">
              
              <div className="ma1">
                <TextField
                    id="alias"
                    label="alias"
                    type="text"
                    variant="outlined"
                    onChange={(e) => this.handleChange(e)}/>
              </div>

              <div className="ma1">
                <TextField
                    id="email"
                    label="email"
                    type="email"
                    variant="outlined"
                    onChange={(e) => this.handleChange(e)}/>
              </div>

              <div className="ma1">
                <TextField
                    id="password"
                    label="password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => this.handleChange(e)}/>
              </div>

              <div className="ma1">
                <TextField
                    id="confirmedPassword"
                    label="confirm password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => this.handleChange(e)}
                    />
              </div>
            </div>
            
            <div className="mt2 mr1 buttonWrapperStyle">
              <Link to="/">
                <Button 
                    onClick={this.handleSubmit}
                    variant="outlined" 
                    size="small" 
                    style={buttonStyle}
                    >
                    Sign Up
                </Button>
              </Link>
            </div>
            
            {
              authError
              ? <p className="ma1 f3 mb4 red-text montSerrat"> {authError} </p> 
              : ""
            }
        </div>
        
      </div>
    );
          
  }
}

const mapStateToProps = ( state ) =>{
  return{
    auth: state.firebase.auth, 
    authError: state.auth.authError
  }
}
const mapDispathToProps = (dispatch) => {
  return{
    signUp: (newUser) => { dispatch(signUp(newUser)); }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(SignUpForm);
