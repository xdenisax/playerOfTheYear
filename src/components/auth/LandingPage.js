import 'tachyons';
import '../../container/App.css';
import '../../assets/Fonts.css';

import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class LandingPage extends React.Component{
    constructor(){
        super();
        this.state={
          formSelected : 'SignIn'
        }
    }
    
    changeFormSelected = (formType) => {  
        this.setState({formSelected: formType});
    }

    render(){
        return(
            <BrowserRouter>
        
                <div className="landingPageContainer">
                    <div className="imageBackground" >
                        <p to="/" className= "greenText poiret tc f1 mt5">The Playground</p>
                        <div className ="flex items-center justify-between">
                            <Switch>
                                <Route path="/signin" exact component={ SignInForm }/>
                                <Route path="/signup" component={ SignUpForm }/>
                            </Switch>
                        </div>
                    </div>

                    <div className="footer">
                        <Link to= "/signin"><SignInButton/> </Link>
                        <Link to= "/signup"><SignUpButton/> </Link>
                    </div>
                </div>

            </BrowserRouter>
        );
    }
    
}

export default LandingPage;