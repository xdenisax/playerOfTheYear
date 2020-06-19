import React from 'react';
import '../container/App.css';
import {TextField} from '@material-ui/core';

class SignInForm extends React.Component {
  render (){
    return(
      <div className="container"> 
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </div>
    );
  }
}

export default SignInForm;
