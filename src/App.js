import React from 'react';
import './App.css';

class App extends React.Component {

  render (){
    return(
      <div className="container">
        <div className="imageBackground"></div>
        <div className="footer">
          <button className= "signInButton "> Sign In</button>
          <button className= "signUpButton"> Sign Up</button>
        </div>
      </div>
    );
  }
}

export default App;
