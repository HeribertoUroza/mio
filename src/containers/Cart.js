import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthContext from '../contexts/Auth'




class Cart extends Component {

    render() {

        return (

            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return <h1>View Cart</h1>
                        } else {
                            return <Redirect to='/login' />
                        }
                    }
                }
            </AuthContext.Consumer>

        );
    }
}

export default Cart;
