import React, { Component } from 'react';
import Logo from '../pictures/Logo.png'
import { Link } from 'react-router-dom'

import Moment from 'react-moment';

const Card = (props) => {
    return (
        <>
            <div className="card col-3" key={props.key} >
                <Link className='card-header' to='/profile/'>{props.username}</Link>
                <Link to='/product'>
                    <img src={props.img_url}
                        className="card-img-top cimg" alt="..." />
                </Link>
                    <div className="card-body">
                    <h4 className='card-title'>{props.title_product}</h4>
                        <h5 className='card-title'>${props.amount}</h5>
                    <p className="card-text">{props.product_desc}</p>

                        <Link to="/product" className="btn btn-primary">BUY</Link>

                    </div>
                    <div className="card-footer">
                    <small className="text-muted"><Moment fromNow>{props.updatedat}</Moment></small>
                    </div>
                        </div>
        
    
        </>
    )
};

export default Card;