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
  "float":'right'
}

var formInputsStyle = { 
  "position" : "relative"
}

var InputsStyle = {
  "float":'right'

}

var titleStyle = {
  "fontFamily": `'Montserrat', sans-serif`,
  "color":"#006d77",
  "float":'right'
}

let validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(re);
}


class SignInForm extends React.Component {
  constructor(){
    super(); 
    this.state = {
      email : "", 
      password : "",
      errorEmail: false, 
      errorPassword: false
    }
  }

  onEmailChange = (event) => { 
    if(event.target.value.length<5  || !validateEmail(event.target.value)){
      console.log(event.target.value.length)
      this.setState({email: event.target.value, errorEmail:true});
    }else{
      this.setState({email: event.target.value, errorEmail:false});
    }
  }

  onPasswordChange = (event) => { 
    if(event.target.value.length<5){
      this.setState({password: event.target.value, errorPassword: true});
    }else{
      this.setState({password: event.target.value, errorPassword: false});
    }
  }

  render (){
    return(
      
      <div className="formInputs fl w-25 flex flex-column items-start ma6"
      style={{formInputsStyle}}>
        <p 
          className="ma1 f3 mb3"
          style={titleStyle}> 
          Sign In
        </p>

        <div className="w-100" style ={{InputsStyle}}>
          <div className="ma1">
          <TextField
            id="outlined-password-input"
            label="email"
            type="email"
            variant="outlined"
            error = {this.state.errorEmail}
            onChange={(e) => this.onEmailChange(e) }/>
        </div>

        <div className="ma1">
          <TextField
            id="outlined-password-input"
            label="password"
            type="password"
            variant="outlined"
            error={this.state.errorPassword}
            onChange = {(e) => this.onPasswordChange(e)}/>
        </div>
        </div>
        
        <div className="mt2 ml1 " >
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

export default SignInForm;
