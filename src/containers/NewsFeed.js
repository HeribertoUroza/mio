import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import AuthContext from '../contexts/Auth'
import Card from '../components/Card'

import '../styles/NewsFeed.css'


class NewsFeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userUid: '',
            products: []
        }
    }
    static contextType = AuthContext;

    componentDidMount () {

        axios.get(`http://localhost:5001/products/all`)
            .then(res => {
                this.setState({ products : res.data.data})
                console.log(this.state)
            })
            .then(() => {
                console.log('NF context', this.context.uid)
            })
            .catch(err => {
                console.log(err)
            })
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
                                            
                                            return <Card username={e.username} key={i} title_product={e.title_product} amount={e.amount} product_desc={e.product_desc} updatedat={e.updatedat} img_url={e.img_url}/>
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
