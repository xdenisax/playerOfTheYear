import React from 'react';
import './App.css';
import SignInButton from '../components/SignInButton';
import SignUpButton from '../components/SignUpButton';
import SignInForm from '../components/SignInForm';

class App extends React.Component {

  render (){
    return(
      <div className="container">
        <div className="imageBackground">
          <SignInForm/>
        </div>
        <div className="footer">
          <SignInButton/> 
          <SignUpButton/>
        </div>
      </div>
    );
  }
}

export default App;
