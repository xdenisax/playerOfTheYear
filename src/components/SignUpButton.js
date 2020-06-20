import React from 'react';
import '../container/App.css';
import {Button, Icon} from '@material-ui/core';
import Balloon from "../images/balloon.svg";

const signUpButtonStyle ={ 
    "fontFamily": `'Montserrat', sans-serif`,
    "fontSize": "1em",
    "color": "#D7D6D6",
    "border":"none",
    "background":"none"
}

class SignUpButton extends React.Component {
  render (){
    return(
          <Button 
            onClick = {() => this.props.onSubmit("SignUp")}
            variant="contained"
            style={signUpButtonStyle}
            endIcon={
              <Icon> 
                <img 
                  src={Balloon} 
                  height={25} 
                  width={25}
                  color="#D7D6D6"
                  alt="">
                </img>
              </Icon>  }> 
            Sign Up</Button>
    );
  }
}

export default SignUpButton;
