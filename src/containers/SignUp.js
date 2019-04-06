import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import firebase from '../firebase'
import AuthContext from '../contexts/Auth'


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HeadLink: 'Sign Up',
            email: '',
            password: '',
            profile_pic_url: '',
            bio: '',
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
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
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
        const { email, password, profile_pic_url, bio, err } = this.state;
        const displayError = err === '' ? '' : <div className="alert alert-danger" role="alert">{err}</div>
        const displayForm = <>
            <div className='container'>
                <br />
                <br />
                <div className='row col-12'>
                    <div className='col-3' >
                        <div className='motto wMessage'>
                            W
                        </div>
                        <div className='motto'>
                            E
                        </div>
                        <div className='motto'>
                            L
                        </div>
                        <div className='motto'>
                            C
                        </div>
                        <div className='motto'>
                            O
                        </div>
                        <div className='motto'>
                            M
                        </div>
                        <div className='motto'>
                            E
                        </div>
                        <div className='motto'>
                            !
                        </div>
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
                        <div class="custom-file">
                            <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                                <label className="custom-file-label" for="validatedCustomFile">Choose Profile Picture...</label>
                                
                            </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="bio" value={bio} placeholder="Start Your Bio" onChange={this.handleChange} ></textarea>
                        </div>
                        <div className='button'>
                            <button type="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
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
                            return displayForm;
                        }
                    }
                }
            </AuthContext.Consumer>

        );
    }
}

export default SignUp;
