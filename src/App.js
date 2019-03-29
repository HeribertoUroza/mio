import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './containers/Login'



import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HashRouter>
          <> 
            <Switch>
              <Route path='/Login' exact component= { Login } />
            </Switch>
          </>

        </HashRouter>
      </>

    );
  }
}

export default App;
