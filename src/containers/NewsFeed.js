import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthContext from '../contexts/Auth'
import Card from '../components/Card'



class NewsFeed extends Component {

    render() {
        const displayForm = <>
            <div class='row col-12'></div>
                <div class="card-deck">
                    <Card />
            </div>
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
