import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions.js';
// import {TextField, Button} from '@material-ui/core';
import { TextInput, Button } from 'react-materialize';
import "./SignIn.css"
import 'tachyons';

var buttonStyle = {
  "fontFamilt": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "color": "#006d77",
  "background":"none",
  "borderColor":"#006d77"
}


class SignInForm extends React.Component {

  state = {
    email : "", 
    password : ""
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.signIn(this.state);
  }

  render (){
    const { authError, auth } = this.props;

    if( auth.id ) return <Redirect to ="/"/>

    return(
      <div className="formInputsStyle fl w-20 flex flex-column items-start ml5 form ">
          
          <p className="ma1 f3 mb3 titleStyle"> Sign In </p>

          <div className="w-100 inputsStyle" >
            <div className="ma1">
            <TextInput
              id="email"
              label="email"
              type="email"
              onChange={(e) => this.handleChange(e) }
            />
            </div>

            <div className="ma1">
              
            <TextInput
              id="password"
              label="password"
              type="password"
              onChange={(e) => this.handleChange(e) }
            />
            </div>
          </div>
          
          <div className="mt2 ml1 montSerrat greenText" >
            
            <Button
              style={ buttonStyle }
              node="button"
              waves="light"
              onClick={ this.handleSubmit } >
              Log In
            </Button>
          </div>

          {
            authError
            ? <p className="ma1 f3 mb4 red-text montSerrat"> {authError} </p> 
            : ""
          }
      </div>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    signIn: (creds) => { dispatch( signIn(creds) );}
  }
}

const mapStateToProps = ( state ) => { 
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
