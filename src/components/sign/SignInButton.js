import React from 'react';
import {Button, Icon} from '@material-ui/core';
import Beach from "../../images/beach.svg";
import 'tachyons';

var buttonStyle={
  "fontFamily": `'Montserrat', sans-serif`,
  "fontSize": "1em",
  "color": "#D7D6D6",
  "border":"none",
  "background":"none"
}

class SignInButton extends React.Component {

  render (){
    return(
        <div className = "mt-5">
            <Button 
                onClick={()=>this.props.onSubmit("SignIn")}
                variant="contained" 
                style={ buttonStyle }
                endIcon={
                  <Icon> 
                    <img 
                      src={Beach} 
                      height={25} 
                      width={22}
                      color="#D7D6D6"
                      alt="">
                    </img>
                  </Icon> 
                }> 
              Sign In 
          </Button>
        </div>
    );
  }
}

export default SignInButton;
