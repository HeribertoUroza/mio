import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../pictures/Logo.png'
// import '../styles/App.css'

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-light nav" >
                <Link className="navbar-brand" to='/'>
                    <img src={Logo} width="100" height="100" className="d-inline-block align-top" alt="" />
                </Link>
                <div className='lcontainer'>
                    <Link to='/Login' className='links'>Testing</Link>
                </div>
            </nav>
            <div className='motto'>what's mine is yours and what's yours is mio</div>
        </>
            )
        };
        
export default NavBar