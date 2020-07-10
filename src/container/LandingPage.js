import 'tachyons';
import './App.css';
import React from 'react';
import SignInButton from '../components/auth/SignInButton';
import SignUpButton from '../components/auth/SignUpButton';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';

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