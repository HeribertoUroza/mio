import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import firebase from './firebase'

import NavBar from './components/NavBar'
import SignUp from './containers/SignUp'
import Login from './containers/Login'
import Logout from './containers/Logout'
import NewsFeed from './containers/NewsFeed'
import Error404 from './containers/Error404'
import Footer from './components/Footer'

import AuthContext from './contexts/Auth'

import './styles/App.css'


class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
      }
      else {
        this.setState({
          user: null
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }


  render() {
    return (
      <>
        <HashRouter>
          <>
            <AuthContext.Provider value={this.state.user}>
              <Route path='/' component={NavBar} />
              <div className='cContainer'>
                <div className='content'>
                  <Switch>
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/logout' exact component={Logout} />
                    <Route path='/' exact component={ NewsFeed } />
                    <Route component={Error404} />
                  </Switch>
                </div>
              </div>
              <footer className='footer'>
                <Route path='/' component={Footer} />
              </footer>
            </AuthContext.Provider>
          </>

        </HashRouter>
      </>

    );
  }
}

export default App;
