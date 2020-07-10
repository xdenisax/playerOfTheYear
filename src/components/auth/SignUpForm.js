import React from 'react';
import {Link} from 'react-router-dom';
import {TextField, Button, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { signIn, signUp } from '../../store/actions/authActions';
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
            alias:"",
            email:"",
            password:"",
            confirmedPassword:"",

          //   error:{
          //     firstName: false,
          //     email: false,
          //     password: false,
          //     confirmedPassword: false,
          //     severity: "", 
          //     snackbarMessage:""
          // }
        }
    }


    // validateInput = (e) => {
    //   if(e.target.id === 'email' && !validateEmail(e.target.value)){
    //     this.setState({error:{...this.state.error, email:true, snackbarMessage: 'Invalid email.', severity:"error"}});
    //     return false;
    //   }
    
    //   if(!validateLength(e.target.value)){
    //     if(e.target.id === 'firstName'){
    //       this.setState({error: {...this.state.error,  firstName:true, snackbarMessage: 'Name not long enough.', severity:"error"}});
    //     }
        
    //     if(e.target.id === 'password'){
    //       this.setState({error: {...this.state.error, password:true, snackbarMessage: 'Password not long enough.', severity:"error"}});
    //     }
        
    //     if(e.target.id === 'confirmedPassword'){
    //       this.setState({error: { ...this.state.error, confirmedPassword: true, snackbarMessage: 'Confirmation password not lon enough.', severity:"error"}});
    //     }

    //     return false;
    //   }

    //   if( e.target.id === 'confirmedPassword' && e.target.value !== this.state.password){
    //     this.setState({error: {...this.state.error, confirmedPassword: true, snackbarMessage: "Passwords don't match", severity:"error"}});
    //     return false;
    //   }
      
    //   return true;
    // }

    handleSubmit = (e) =>{
      console.log(this.state);
      this.props.signUp(this.state);
    }

    handleChange = (e) => {
      // if( this.validateInput(e)){
        this.setState({
          [e.target.id] : e.target.value,
          // error: {
          //   ...this.state.error,
          //   [e.target.id]: false,
          //   severity:"",
          //   snackbarMessage:""
          // }
        });
      // }
    }

  render (){

    const { auth, authError } = this.props;
    
    if( auth.uid )
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
                    // error={this.state.error.firstName}
                    onChange={(e) => this.handleChange(e)}/>
              </div>

              <div className="ma1">
                <TextField
                    id="email"
                    label="email"
                    type="email"
                    variant="outlined"
                    // error={this.state.error.email}
                    onChange={(e) => this.handleChange(e)}/>
              </div>

              <div className="ma1">
                <TextField
                    id="password"
                    label="password"
                    type="password"
                    variant="outlined"
                    // error={this.state.error.password}
                    onChange={(e) => this.handleChange(e)}/>
              </div>

              <div className="ma1">
                <TextField
                    id="confirmedPassword"
                    label="confirm password"
                    type="password"
                    variant="outlined"
                    // error={this.state.error.confirmedPassword}
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
