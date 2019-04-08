import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import firebase from '../firebase'
import AuthContext from '../contexts/Auth';



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HeadLink: 'Login',
            email: '',
            password: '',
            err: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log('res', res)
            })
            .catch(err => {
                const { message } = err;
                this.setState({
                    err: message
                })
            })
    }

    render() {
        const { email, password, err } = this.state;
        const displayError = err === '' ? '' : <div className="alert alert-danger" role="alert">{err}</div>
        const displayForm = <>
            <div className='container'>
                <br />
                <br />
                <div className='row col-12'>
                    <div className='col-3 messages'>
                        <div className=''>Please Login.</div> 
                        <div> If you do not have an account.</div> 
                        <div><Link to='/signup'>Click Here to Sign Up</Link></div>


                    </div>
                    <form className='col-6'>
                        {displayError}
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Username"
                                name='email' value={email} onChange={this.handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" name='password' value={password} onChange={this.handleChange} />
                        </div>
                        <div className='button'>
                            <button type="submit" className="mbtn mbtn-secondary" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='col-3'></div>
            </div>
        </>
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return <Redirect to='/' />
                        } else {
                            return displayForm
                        }
                    } 
                }
            </AuthContext.Consumer>

        );
    }
}

export default Login;
