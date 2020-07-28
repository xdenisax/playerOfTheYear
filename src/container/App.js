import React from 'react';
import './App.css'
import Dashboard from '../components/dashboard/Dashboard.js';
import LandingPage from '../components/auth/LandingPage.js';
import { connect } from 'react-redux';

class App extends React.Component {
  render (){
    const { auth } = this.props;

    return(
      auth.uid 
      ? <Dashboard/>
      : <LandingPage/>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
