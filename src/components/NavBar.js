import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../pictures/Logo.png'

import AuthContext from '../contexts/Auth'

const NavBar = (props) => {
    const loggedIn = <> 
        <Link to='/' className='links'>Feed</Link>
        <Link to='/profile' className='links'>Profile</Link>
        <Link to='/cart' className='links'>View Cart</Link>
        <Link to='/logout' className='links'>Logout</Link>
    </>

    const loggedOut = <>
        <Link to='/login' className='links'>Login</Link>
        <Link to='/signup' className='links'>Sign Up</Link>
    </>

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
                                    return loggedIn
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