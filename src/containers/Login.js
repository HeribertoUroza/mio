import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import firebase from '../firebase'
import 'bootstrap'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HeadLink: 'Login/Sign Up',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <>
                <NavBar page={this.state.HeadLink}/>

                <div className='cContainer'>
                    <div className='content'>
                        <div className='container'>
                            <br />
                            <br />
                            <div className='row col-12'>
                                <div className='col-3'></div>
                                <div className='col-6'>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className='button'>
                                        <button type="submit" className="btn btn-secondary">Submit</button>
                                    </div>

                                </div>
                            </div>
                            <div className='col-3'></div>
                        </div>
                    </div>
                </div>

            {/* <Footer /> */}
            </>

                );
    }
}

export default Login;
