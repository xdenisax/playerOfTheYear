import 'tachyons';
import '../../container/App.css';
import React from 'react';
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