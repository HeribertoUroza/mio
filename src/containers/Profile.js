import React, { Component } from 'react';
import { Redirect , Link } from 'react-router-dom'

import AuthContext from '../contexts/Auth'





class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userUid: '',
            currentUser: null,
            product: '',
            productsArr:[]
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
        //console.log('wum',this.context)
    }

    handleFile = (e) => {
        
        const firstFile = e.target.files[0]
        const fileName = firstFile.name
        
        console.log(firstFile.name)
        this.setState({
            product: fileName,
            product_obj: firstFile
        }, () => {
            console.log(this.state)
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { productsArr, product } = this.state
        productsArr.push(product)
        
        console.log(this.state)
            
    }



    render() {
        //console.log('Profile HERE')
        //console.log(this.context.uid)
        const displayform = <> 
        <div className="jumbotron">
            <h1 className="display-4">@heri</h1>
            <p className="lead">"I sell tech and stuff"</p>

            <div className="card mb-3" style={{"width" : "100%"}}>
                    <div className="row no-gutters" style={{ "justifyContent": "center" }}> 
                    <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1469004243181-2a4364487fbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="card-img" alt="..." />
                    </div>
                        

                    </div>
                    

                </div>

                <form className=''>

                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="validatedCustomFile" required name='profile_pic_url' onChange={this.handleFile} />
                        <label className="custom-file-label" >{this.state.profile_pic_name}</label>
                    </div>
                    <br />
                    <div className='button'>
                        <button type="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                </div>

            
                </>
        return (
            
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return displayform
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
