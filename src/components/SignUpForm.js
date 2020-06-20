import React from 'react';
import '../container/App.css';
import {TextField, Button} from '@material-ui/core';
import 'tachyons';
import {addUser} from '../firebase/userFunctions';

var buttonStyle= {
  "fontFamily": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "color": "#006d77",
  "background":"none",
  "borderColor":"#006d77",
  "float":'left'
}

var buttonWrapperStyle = { 
  "position" : "relative"
}

var titleStyle = {
  "fontFamily": `'Montserrat', sans-serif`,
  "color":"#006d77"
}

let validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(re);
}

let validateLength = (input) => {
  return input.length > 5;
}

class SignUpForm extends React.Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            confirmedPassword:"",
            emailError:false,
            passwordError:false,
            confirmedPasswordError:false
        }
    }

    onEmailChange = (event) =>{
        if(!validateLength(event.target.value)  || !validateEmail(event.target.value)){
          this.setState({email: event.target.value, errorEmail:true});
        }else{
          this.setState({email: event.target.value, errorEmail:false});
        }
    }

    onPasswordChange = (event) =>{
        if(!validateLength(event.target.value)){
          this.setState({password: event.target.value, errorPassword:true});
        }else{
          this.setState({password: event.target.value, errorPassword:false});
        }
    }

    onConfirmedPasswordChange = (event) =>{
        if(!validateLength(event.target.value)){
          this.setState({confirmedPassword: event.target.value, errorConfirmedPassword:true});
        }else{
          this.setState({confirmedPassword: event.target.value, errorConfirmedPassword:false});
        }
    }

    saveToDataBase = () =>{
      if(!validateLength(this.state.email)){
        console.log("email length not right.");
        this.setState({emailError:true});
      }
      if(!validateEmail(this.state.email)){
        console.log("mail not valid");
        this.setState({emailError:true});
      }
      if(!validateLength(this.state.password)){
        console.log("password length not right");
        this.setState({passwordError:true});
      }
      if(!validateLength(this.state.confirmedPassword)){
        console.log("confirmed pass length !right;")
        this.setState({confirmedPassword:true});
      }
      if(this.state.password!==this.state.confirmedPassword){
        console.log("pass not same");
        this.setState({passwordError:true, confirmedPassword:true});
      }
      if(validateLength(this.state.email)
        && validateEmail(this.state.email)
        && validateLength(this.state.password)
        && validateLength(this.state.confirmedPassword)
        && this.state.password===this.state.confirmedPassword){
          let user = {
            email: this.state.email,
            password: this.state.password
          }
          addUser(user);
        }
    }

  render (){
    return(
      
        <div className="formInputs fl w-25 flex flex-column ma4"> 
            <p 
            className="ma1 f3 mb3"
            style={titleStyle}> 
            Sign Up
            </p>

            <div className="w-100">
            <div className="ma1">
            <TextField
                id="outlined-password-input"
                label="email"
                type="email"
                variant="outlined"
                error={this.state.errorEmail}
                onChange={(e) => this.onEmailChange(e)}/>
            </div>

            <div className="ma1">
            <TextField
                id="outlined-password-input"
                label="password"
                type="password"
                variant="outlined"
                error={this.state.errorPassword}
                onChange={(e) => this.onPasswordChange(e)}/>
            </div>

            <div className="ma1">
            <TextField
                id="outlined-password-input"
                label="confirm password"
                type="password"
                variant="outlined"
                error={this.state.errorConfirmedPassword}
                onChange={(e) => this.onConfirmedPasswordChange(e)}
                />
            </div>
            </div>
            
            <div className="mt2 ml1" 
            style={buttonWrapperStyle}>
            <Button 
                variant="outlined" 
                size="small" 
                style={buttonStyle}
                onClick = {() => this.saveToDataBase()}>
                Sign Up
            </Button>
            </div>
        
        
      </div>
    );
  }
}

export default SignUpForm;
