import React from 'react';
import './App.css';
import SignInButton from '../components/SignInButton';
import SignUpButton from '../components/SignUpButton';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      formSelected : 'SignIn'
    }
  }

  changeFormSelected = (formType) => {  
    this.setState({formSelected: formType});
  }

  render (){
    return(
      <div className="container">
        <div className="imageBackground flex items-center justify-between">
          {this.state.formSelected==='SignIn' 
          ? <SignInForm />
          : <SignUpForm/>}
        </div>
        <div className="footer">
          <SignInButton onSubmit = {this.changeFormSelected}/> 
          <SignUpButton onSubmit = {this.changeFormSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
