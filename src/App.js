import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import SignUp from './containers/SignUp'
import Login from './containers/Login'
import Logout from './containers/Logout'


class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <> 
              <Route path='/' component={ NavBar} />
              <Route path='/signup' exact component={ SignUp } />
              <Route path='/login' exact component={ Login } />
              <Route path='/logout' exact component={ Logout } />
            
          </>

        </HashRouter>
      </>

    );
  }
}

export default App;
