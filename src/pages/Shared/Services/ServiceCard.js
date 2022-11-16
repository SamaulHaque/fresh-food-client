import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, price, title, img} = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className='h-40 w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn  btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;