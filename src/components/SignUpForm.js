import React from 'react';
import '../container/App.css';
import {TextField, Button, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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
            confirmedPasswordError:false,
            severity: "", 
            snackbarMessage:""
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
        this.setState({emailError:true, severity:"error", snackbarMessage: "Email does not have a proper length."});
      }
      if(!validateEmail(this.state.email)){
        this.setState({emailError:true, severity:"error", snackbarMessage: "Email does not have a proper format."});
      }
      if(!validateLength(this.state.password)){
        this.setState({passwordError:true, severity:"error", snackbarMessage: "Password does not have a proper length."});
      }
      if(!validateLength(this.state.confirmedPassword)){
        this.setState({confirmedPassword:true, severity:"error", snackbarMessage: "Confirmation password does not have a proper length."});
      }
      if(this.state.password!==this.state.confirmedPassword){
        this.setState({passwordError:true, confirmedPassword:true, severity:"error", snackbarMessage: "Passwords does not match."});
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
          let successCode = addUser(user);
          console.log(successCode)
          successCode === 'success'
          ? this.setState({severity:successCode, snackbarMessage: "Account created successfully."})
          : this.setState({severity:successCode, snackbarMessage: "Error occured while creating the new account."})
        }
    }


  render (){
    return(
      <div className="flex flex-column items-end w-100 " >
        <div className="formInputs fl w-25 flex flex-column items-end ma6"> 
            <p 
            className="ma1 f3 mb3"
            style={titleStyle}> 
            Sign Up
            </p>

            <div className="w-100 flex flex-column items-end">
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
            
            <div className="mt2 mr1" 
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
        
        <div className="flex items-center">
          <Snackbar  autoHideDuration={6000}></Snackbar>
          {this.state.severity!="" 
            ? this.state.severity=="success" 
              ? <Alert severity="success">This is a success message!</Alert> 
              : this.state.severity == "error"
                ?  <Alert severity="error">{this.state.snackbarMessage}</Alert>
                : ""
            :""
          }
         
        </div>
        
      </div>
    );
  }
}

export default SignUpForm;
