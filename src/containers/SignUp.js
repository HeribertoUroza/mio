import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase';
//import firebase from '../firebase';
import AuthContext from '../contexts/Auth';

import axios from 'axios'


class SignUp extends Component {
    constructor(props) {
        super(props);

       this.state = {
            HeadLink: 'Sign Up',
            displayName: '',
            email: '',
            password: '',
            profile_obj: null,
            profile_pic_name: '',
            bio: '',
            userId: '',
            err: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFile = (e) => {
        const firstFile = e.target.files[0]
        const fileName = firstFile.name
        
        console.log(firstFile.name)
        this.setState({
            profile_pic_name: fileName,
            profile_obj: firstFile
        }, () =>{
            console.log(this.state)  
        })


    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(res => {
                console.log('res', res)
                this.setState({
                    userId: res.user.uid
                })
                console.log(this.state)
            })
            .then( async () => {
                const root = await firebase.storage().ref();
                console.log('hehehehe1st', this.state.userId) 
                const uid = await this.state.userId
                const fRoute =  await root.child(`/${uid}/Profile_Pic/${this.state.profile_pic_name}`)
                console.log('hehehehe', this.state.userId) 
                return fRoute.put(this.state.profile_obj)
            })
            .then((snap) => {
                console.log(snap)
                return snap.ref.getDownloadURL()
            })
            .then((url) => {
                console.log(url)
                //username, email, firebase_uid , bio, profile_pic_url
                const { displayName, email, userId, bio} = this.state;
                console.log(this.state)
                return axios.post('http://localhost:5001/users', {
                    username: displayName,
                    email: email,
                    firebase_uid: userId,
                    bio: bio,
                    profile_pic_url: url
                })
            })
            .then((response) => {
                console.log( 'next res', response);
            })
            .catch(err => {
                const { message } = err;
                this.setState({
                    err: message
                })
                console.log('yeyeyeyey',this.state)
            })
    }

    render() {
        const { email, displayName, password, bio, err } = this.state;
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
                            <input type="text" className="form-control" placeholder="Display Name" aria-label="displayName"
                                name='displayName' value={displayName} onChange={this.handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" name='password' value={password} onChange={this.handleChange} />
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="validatedCustomFile" required name='profile_pic_url' onChange={this.handleFile}/>
                            <label className="custom-file-label" >{this.state.profile_pic_name}</label>
                            </div>
                        <div className="form-group">
                            <label ></label>
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
                            //console.log(user)
                            console.log(this.state)
                            return <Redirect to={{
                                pathname: '/',
                                state: { results: this.state.displayName}
                            }}/>
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
