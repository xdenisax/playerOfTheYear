import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard.js';
import LandingPage from '../container/LandingPage.js';
import { connect } from 'react-redux';

class App extends React.Component {
  render (){
    return(
      <BrowserRouter>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route exact path="/" component={LandingPage}/>
          </Switch>
      </BrowserRouter>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
