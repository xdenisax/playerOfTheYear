import React from 'react';
import {Link} from 'react-router-dom';
import "./SignIn.css"
import {TextField, Button} from '@material-ui/core';
import 'tachyons';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions.js';

var buttonStyle = {
  "fontFamilt": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "color": "#006d77",
  "background":"none",
  "borderColor":"#006d77",
  "float":"left"
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
    this.props.signIn(this.state);
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
                <Button 
                    onClick={this.handleSubmit} 
                    variant="outlined" 
                    size="small" 
                    style={buttonStyle}>
                      <Link to="/dashboard" >
                        Log In
                      </Link>
                </Button>
          </div>
        
      </div>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    signIn: (creds) => { dispatch( signIn(creds) );}
  }
}
export default connect(null, mapDispatchToProps)(SignInForm);
