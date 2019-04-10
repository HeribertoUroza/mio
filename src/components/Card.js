import React, { Component } from 'react';
import Logo from '../pictures/Logo.png'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
                <div className="card col-3" key={props.key}>
                <Link className='card-header' to='/profile'>{props.username}</Link>
                <Link to='/product'>
                    <img src={Logo}
                        className="card-img-top cimg" alt="..." />
                </Link>
                    <div className="card-body">
                        <h4 className='card-title'>Candy</h4>
                        <h5 className='card-title'>$$$</h5>
                        <p className="card-text">Look at the pic brah</p>

                        <Link to="/product" className="btn btn-primary">BUY</Link>

                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                        </div>
           
    
        </>
    )
};

export default Card;