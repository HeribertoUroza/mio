import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthContext from '../contexts/Auth'
import Card from '../components/Card'

import '../styles/NewsFeed.css'


class NewsFeed extends Component {

    render() {
        const displayForm = <>
            {/* <div className='row col-12'>
                <div className="card-deck"> */}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                {/* </div>
            
            </div> */}
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
