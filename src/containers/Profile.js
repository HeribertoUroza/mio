import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthContext from '../contexts/Auth'




class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userUid: '',
            currentUser: null
        }
    }

    static contextType = AuthContext;


    componentDidMount () {
        console.log(this.props)
        // console.log(this.context)
        // await this.setState({
        //     currentUser: this.context
        // })
        // await console.log(this.state)
    }

    render() {

        return (

            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return <h1>Profile</h1>
                        } else {
                            return <Redirect to='/login' />
                        }
                    }
                }
            </AuthContext.Consumer>

        );
    }
}

export default Profile;
