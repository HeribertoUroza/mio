import React, { Component } from 'react';
import firebase from '../firebase'



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
                <div className='motto' style={{ 'font-size': '90px' }}>You Have Logged Out</div>
            </>

        );
    }
}

export default Logout;
