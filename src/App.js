import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './containers/Login'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <>
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
