import React from 'react';
import {Link} from 'react-router-dom';
import "./SignIn.css"
import {TextField, Button} from '@material-ui/core';
import 'tachyons';

var buttonStyle = {
  "fontFamilt": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "color": "#006d77",
  "background":"none",
  "borderColor":"#006d77",
  "float":"left"
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

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render (){
    return(
      
      <div className="formInputsStyle float-left fl w-25 flex flex-column items-start ma6 form ">
          
          <p className="ma1 f3 mb3 titleStyle"> Sign In </p>

          <div className="w-100 inputsStyle" >
            <div className="ma1">
              <TextField
                id="email"
                label="email"
                type="email"
                variant="outlined"
                error = {this.state.errorEmail}
                onChange={(e) => this.handleChange(e) }/>
            </div>

            <div className="ma1">
              <TextField
                id="password"
                label="password"
                type="password"
                variant="outlined"
                error={this.state.errorPassword}
                onChange = {(e) => this.handleChange(e)}/>
            </div>
          </div>
          
          <div className="mt2 ml1" >
            <Link to="/dashboard" onSubmit={this.handleSubmit} >

                <Button 
                    variant="outlined" 
                    size="small" 
                    style={buttonStyle}>
                  Log In
                </Button>
              
            </Link>
            
          </div>
        
      </div>
    );
  }
}

export default SignInForm;
