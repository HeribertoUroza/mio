import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'

import SignUp from './containers/SignUp'
import Login from './containers/Login'
import Logout from './containers/Logout'

import Footer from './components/Footer'

import './styles/App.css'


class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <>
            <Route path='/' component={NavBar} />
            <div className='cContainer'>
              <div className='content'>
                <Switch>
                  <Route path='/signup' exact component={SignUp} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/logout' exact component={Logout} />
                  
                </Switch>
              </div>
            </div>
            <footer className='footer'>
              <Route path='/' component={Footer} />
            </footer>
          </>
        </HashRouter>
      </>

    );
  }
}

export default App;
