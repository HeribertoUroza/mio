import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthContext from '../contexts/Auth'


class Product extends Component {

    render() {

        return (

            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return <h1>Product</h1>
                        } else {
                            return <Redirect to='/login' />
                        }
                    }
                }
            </AuthContext.Consumer>

        );
    }
}

export default Product;
