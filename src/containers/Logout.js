import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import firebase from '../firebase'
import 'bootstrap'


class Logout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HeadLink: 'Logged Out',

        }
    }


    componentDidMount() {
        firebase.auth().signOut()
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <>
           <div className='container'>
                    <br />
                    <br />
                    <h1>Logged Off</h1>
                </div>

            </>

        );
    }
}

export default Logout;
