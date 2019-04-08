import React, { Component } from 'react';
import firebase from '../firebase'

import '../styles/Logout.css'

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

    render() {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='mcenter'>
                    <div className='motto' style={{ 'fontSize': '90px' }}>You Have Logged Out</div>

                </div>
            </>

        );
    }
}

export default Logout;
