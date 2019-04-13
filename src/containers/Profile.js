import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthContext from '../contexts/Auth'
import CurrentUserContext from '../contexts/CurrentUser'




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
        this.setState({
            currentUser: this.context
        })
        console.log(this.state)
    }

    componentWillUnmount() {
        
    }

    render() {
        //console.log('Profile HERE')
        //console.log(this.context.uid)

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
