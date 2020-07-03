import 'tachyons';
import './App.css';
// import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import React from 'react';
import SignInButton from '../components/sign/SignInButton';
import SignUpButton from '../components/sign/SignUpButton';
import SignInForm from '../components/sign/SignInForm';
import SignUpForm from '../components/sign/SignUpForm';

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
                <div className="landingPageContainer">
                    <div className="imageBackground" >
                        <div className ="flex items-center justify-between">
                            {this.state.formSelected==='SignIn' 
                            ? <SignInForm />
                            : <SignUpForm/>}
                        </div>
                    </div>

                    <div className="footer">
                        <SignInButton onSubmit = {this.changeFormSelected}/> 
                        <SignUpButton onSubmit = {this.changeFormSelected}/>
                    </div>

                </div>
        );
    }
    
}

export default LandingPage;