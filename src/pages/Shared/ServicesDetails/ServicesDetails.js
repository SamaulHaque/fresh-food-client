import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AddReview from './AddReview';

const ServicesDetails = () => {
    useTitle('My Service Details')
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const { title, img, price, description} = service;

    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl mt-3">
            <figure><img className='w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-xl font-bold'>Price: ${price}</p>
                <p className='text-justify'>
                    {description}
                    
                </p>
            </div>
        </div>

        {/* all reviews section start here */}
        <div className='mt-12 text-center font-bold'>
        <h2 className='text-center text-3xl font-bold mb-6' >See All Reviews</h2>
            <Link className='btn' to='/reviews'>Click here to see all Reviews</Link>
        </div>
    
         {/* add review section start here */}
        <div>
            {
                user?.uid ?
                <>
                <AddReview></AddReview>
                </> :
                <>
                <div className='text-center mt-12'>
                    <h2 className='text-center text-3xl font-bold mb-6' >Please Login to Add Review.</h2>
                    <Link className='btn' to='/login'>Log In</Link>
                </div>
                </>
            }
        </div>
      </div>
    );
};

export default ServicesDetails;