import React, { Component } from 'react';
import { Redirect , Link } from 'react-router-dom'
import axios from 'axios'
import * as firebase from 'firebase';
import AuthContext from '../contexts/Auth'





class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userUid: '',
            currentUser: {},
            product: '',
            productsArr:[]
        }
    }

    static contextType = AuthContext;


    componentDidMount= async () => {
        console.log('this.props CDM', this.props.match.params.firebase_uid)
        const fbUser = await this.props.match.params.firebase_uid

        await axios.get(`http://localhost:5001/users/${fbUser}`)
        .then(res => {
            console.log('res in profile',res.data[0])
            this.setState({
                currentUser: res.data[0]
            })
        })
        .then(()=> {
            console.log('after axios', this.state)
            console.log('herherh',this.state.currentUser.firebase_uid)
            axios.get(`http://localhost:5001/products/byuser/${this.state.currentUser.firebase_uid}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err.toString())
        })
        
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

    handleSubmit = async (e) => {
        e.preventDefault();
        const { product } = this.state
        
        let productsArr = [];
        
        console.log(this.state)
        console.log(productsArr)

        const root = await firebase.storage().ref();
        
        const uid = await this.state.currentUser.firebase_uid
        const fRoute = await root.child(`/${uid}/Product_Pic/${this.state.product}`)
        
        return await fRoute.put(this.state.product_obj)
            .then(snap => {
                console.log('this is the snap',snap)
                return snap.ref.getDownloadURL()
            })
            .then(url => {
                console.log('with URL',this.state)
                const { id, username, firebase_uid } = this.state.currentUser
                const {name} = this.state.product_obj
                axios.post(`http://localhost:5001/products/`, {
//user_id, username, firebase_uid,title_product, img_url, amount, product_desc
                user_id: id,
                username: username,
                firebase_uid: firebase_uid,
                title_product: name,
                img_url: url,
                amount: Math.floor(Math.random() * 100),
                product_desc: 'SomeDesc'
                })
            })
            .then(res => {
                console.log('res after POST', res)
            })
            .catch(err => {
                console.log(err.toString())
            })


        // 
            // .then(async () => {
            //     const root = await firebase.storage().ref();
            //     console.log('hehehehe1st', this.state.userId)
            //     const uid = await this.state.userId
            //     const fRoute = await root.child(`/${uid}/Profile_Pic/${this.state.profile_pic_name}`)
            //     console.log('hehehehe', this.state.userId)
            //     return fRoute.put(this.state.profile_obj)
            // })
            // .then((snap) => {
            //     console.log(snap)
            //     return snap.ref.getDownloadURL()
            // })
            // .then((url) => {
            //     console.log(url)
            //     //username, email, firebase_uid , bio, profile_pic_url
            //     const { displayName, email, userId, bio } = this.state;
            //     console.log(this.state)
            //     return axios.post('http://localhost:5001/users', {
            //         username: displayName,
            //         email: email,
            //         firebase_uid: userId,
            //         bio: bio,
            //         profile_pic_url: url
            //     })
            // })
    }



    render() {
        //console.log('Profile HERE')
        //console.log(this.context.uid)
        const { username, bio, profile_pic_url, email} = this.state.currentUser
        const displayform = <> 
        <div className="jumbotron">
                <h1 className="display-4">@{username}</h1>
                <p className="lead">Contact: {email}</p>
                <p className="lead">'{bio}'</p>
            

            <div className="card mb-3" style={{"width" : "100%"}}>
                    <div className="row no-gutters" style={{ "justifyContent": "center" }}> 
                    <div className="col-md-4">
                            <img src={profile_pic_url} className="card-img" alt="..." />
                    </div>
                        

                    </div>
                </div>

                <form className=''>

                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="validatedCustomFile" required name='profile_pic_url' onChange={this.handleFile} placeholder={this.state.product}/>
                        <label className="custom-file-label" >{this.state.profile_pic_name}</label>
                    </div>
                    <br />
                    <div className='button'>
                        <button type="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                </div>
            {/* <img src={this.state.product} /> */}
            
                </>
        return (
            
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            console.log('inside the profile', user)
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
