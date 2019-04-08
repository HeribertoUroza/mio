import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
           

                <div className="card">
                <Link className='card-header' to='/profile'>@heriberto</Link>
                <Link to='/product'>
                    <img src='https://images.unsplash.com/photo-1499096382193-ebb232527fee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
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