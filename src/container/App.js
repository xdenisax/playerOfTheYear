import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard.js';
import LandingPage from '../container/LandingPage.js';

class App extends React.Component {
  
  
  render (){

    return(

      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
