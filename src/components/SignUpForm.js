import React from 'react';
import '../container/App.css';
import {TextField, Button} from '@material-ui/core';
import 'tachyons';

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
        if(event.target.value.length<5  || !validateEmail(event.target.value)){
          console.log(event.target.value.length)
          this.setState({email: event.target.value, errorEmail:true});
        }else{
          this.setState({email: event.target.value, errorEmail:false});
        }
    }

    onPasswordChange = (event) =>{
        if(event.target.value.length<5){
          this.setState({password: event.target.value, errorPassword:true});
        }else{
          this.setState({password: event.target.value, errorPassword:false});
        }
    }

    onConfirmedPasswordChange = (event) =>{
        if(event.target.value.length<5 ){
          this.setState({confirmedPassword: event.target.value, errorConfirmedPassword:true});
        }else{
          this.setState({confirmedPassword: event.target.value, errorConfirmedPassword:false});
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
                style={buttonStyle}>
                Log In
            </Button>
            </div>
        
        
      </div>
    );
  }
}

export default SignUpForm;
