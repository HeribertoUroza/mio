import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import firebase from '../firebase'
import 'bootstrap'


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HeadLink: 'Sign Up',
            email: '',
            password: '',
            err: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
            .then(res => {
                console.log('res', res)
            })
            .catch(err => {
                const {message} = err;
                this.setState({
                    err: message
                })
            })
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            if(user){
                this.props.history.push('/')
            }
            else {
                
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { email, password, err} = this.state;
        const displayError = err === '' ? '' : <div className="alert alert-danger" role="alert">{ err }</div>
        return (
            <>
            
                
                        <div className='container'>
                            <br />
                            <br />
                            <div className='row col-12'>
                                <div className='col-3'></div>
                                <form className='col-6'>
                                {displayError}
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email" aria-label="Username"
                                         name='email' value={email} onChange={this.handleChange}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password" name='password' value={password} onChange={this.handleChange} />
                                    </div>
                                    <div className='button'>
                                        <button type="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
                                    </div>

                                </form>
                            </div>
                            <div className='col-3'></div>
                        </div>
            </>

                );
    }
}

export default SignUp;
