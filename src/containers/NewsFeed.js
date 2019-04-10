import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axois from 'axios'

import AuthContext from '../contexts/Auth'
import Card from '../components/Card'

import '../styles/NewsFeed.css'


class NewsFeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userUid: '',
            products: [
                {
                    username: '',

                }
            ]
        }
    }
    static contextType = AuthContext;

    componentDidMount = async () => {
   //console.log('eyeyeyeyeyeyeyeyeyeyey', this.context.uid)
        

        // try{
        //     const currentUser = await this.context.uid
        //     console.log(currentUser)
        //     axois.get(`http://localhost:5001/users/${currentUser}`)
        //         .then((res) => {
        //             console.log(res)
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // }
        // catch(err){ 
        //     console.log(err)
        // }

        
    }

    render() {    
       
        return (

            <AuthContext.Consumer>
                {
                    
                     (user) => {
                         
                        if (user) {
                            
                            return (

                                <>
                                <div className='row col-10'>
                                    <input className="form-control mr-lg-2" type="search" placeholder="mio Search" aria-label="Search" />
                                </div>
                                    {
                                        this.state.products.map((e,i) => {
                                            
                                            return <Card username={e.username} key={i}/>
                                        })
                                    }
                                </>
        
                                    ) 
        
        
        
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
