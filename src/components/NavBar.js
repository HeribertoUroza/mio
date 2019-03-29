import React, { Component } from 'react';
import '../styles/App.css'

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-light nav" >
                <a className="navbar-brand" href="./Newsfeed.html">
                    <img src="../public/MockMio/Pictures/logo.png" width="100" height="100" class="d-inline-block align-top" alt="" />
                </a>
                <div className='lcontainer'>
                    <a href="./Login.html" class='links'>Login/Sign Up</a>
                    <a>LoginPage</a>
                </div>
            </nav>

            <div className='motto'>what's mine is yours and what's yours is mio</div>
        </>
            )
        };
        
export default NavBar