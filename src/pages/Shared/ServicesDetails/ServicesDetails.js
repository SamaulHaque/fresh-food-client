import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';
import AddReview from './AddReview';

const ServicesDetails = () => {
    const service = useLoaderData();
    const {title, img, price} = service;

    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl mt-3">
            <figure><img className='w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
            </div>
        </div>

        {/* all reviews section start here */}
        <div className='mt-12 text-center font-bold'>
            <Link className='btn btn-outline' to='/reviews'>Click here to see all Reviews</Link>
        </div>
    
         {/* add review section start here */}
        <div>
            <AddReview></AddReview>
        </div>
      </div>
    );
};

export default ServicesDetails;