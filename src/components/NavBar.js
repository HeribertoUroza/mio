import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../pictures/Logo.png'

import AuthContext from '../contexts/Auth'

const NavBar = (props) => {

    const loggedOut = <>
        <Link to='/login' className='links'>Login</Link>
        <Link to='/signup' className='links'>Sign Up</Link>
    </>
    console.log('nav', props)
    return (
        
        <>
            <nav className="navbar navbar-light nav" >
                <Link className="navbar-brand" to='/'>
                    <img src={Logo} width="100" height="100" className="d-inline-block align-top" alt="" />
                </Link>
                <div className='lcontainer'>
                    <AuthContext.Consumer>
                        {
                            user => {
                                if(user){
                                    console.log('inside nav',user)
                                    return (<>
                                        <Link to='/' className='links'>Feed</Link>
                                        <Link to={`/profile/${user.uid}`} className='links'>Profile</Link>
                                        <Link to={`/cart/${user.uid}`} className='links'>View Cart</Link>
                                        <Link to='/logout' className='links'>Logout</Link>
                                    </>)
                                } else {
                                    return loggedOut
                                }
                            }
                        }
                    </AuthContext.Consumer>
                </div>
            </nav>
            <div className='motto'>what's mine is yours and what's yours is mio</div>
        </>
            )
        };
        
export default NavBar