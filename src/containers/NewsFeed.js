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
            input: '',
            products: [],
            searchedProducts: []
        }
    } 
    static contextType = AuthContext;
    _isMounted = false


    componentDidMount () {
        console.log('compdm',this.state)
        console.log('cdm',this.props)
        this._isMounted = true
        axios.get(`http://localhost:5001/products/all`)
            .then(res => {
                this.setState({ products : res.data.data})
                console.log(this.state)
            })
            .then(() => {
                console.log('NF context', this.context.uid)
            })
            .catch(err => {
                console.log('err',err)
            })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        }) 
        console.log('handle change',this.state.input)
    }

    handleSubmit = e => {
        e.preventDefault();
        
        console.log(this.state.products)
        console.log('first input',this.state.input)
        const searchMatches = this.state.products.filter((e) => {
            console.log('e.title_product',e.title_product)
            const isTrue = e.title_product.toLowerCase().includes(this.state.input.toLowerCase());
            console.log('isTrue',isTrue)
            if (isTrue) {
                console.log('e inside condition',e)
                return e;
            } 
        });
        console.log('searchmatches', searchMatches)
        this.setState({ searchedProducts: searchMatches, input: ''})
    }

    render() {    
        // console.log(this.props)
        return (

            <AuthContext.Consumer>
                {
                    
                     (user) => {
                         
                        if (user) {
                            
                            return (

                                <>
                                <form className='row col-10' onSubmit={this.handleSubmit}>
                                    <input className="form-control mr-lg-2" type="search" placeholder="mio Search" name='input' aria-label="Search" onChange={this.handleChange}/>
                                    <button type='submit'>Submit</button>
                                </form>
                                    { //isMember ? "$2.00" : "$10.00"
                                        this.state.searchedProducts === '' ? this.state.products.map((e, i) => {

                                            return <Card username={e.username} key={i} id={i} title_product={e.title_product} amount={e.amount} product_desc={e.product_desc} updatedat={e.updatedat} img_url={e.img_url} productpath={e.firebase_uid} profilepath={e.id} />
                                        }) :
                                        this.state.searchedProducts.map((e,i) => {
                                            
                                            return <Card username={e.username} key={i} id={i} title_product={e.title_product} amount={e.amount} product_desc={e.product_desc} updatedat={e.updatedat} img_url={e.img_url} productpath={e.firebase_uid} profilepath={e.id}/>
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
