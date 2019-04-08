import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthContext from '../contexts/Auth'
import Card from '../components/Card'

import '../styles/NewsFeed.css'


class NewsFeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    username: ''
                }
            ]
        }
    }

    render() {
        console.log(this.context)
        const displayForm = <>
            
            <div class='row col-10'>

                <input class="form-control mr-lg-2" type="search" placeholder="mio Search" aria-label="Search" />

            </div>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
                
        </>
        return (

            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return displayForm
                        } else {
                            return <Redirect to='/login' />
                        }
                    }
                }
            </AuthContext.Consumer>

        );
    }
}

export default NewsFeed;
