import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AddReview from '../Shared/ServicesDetails/AddReview';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const {user} = useContext(AuthContext)
    const reviews = useLoaderData();
    return (
        <div className='mt-12'>
            <h2 className='text-center text-3xl font-bold mb-6'>All Reviews Here.</h2>
            {
                reviews.map(review => <ReviewCard
                key={review._id}
                review={review}
                ></ReviewCard>)
            }
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

export default Reviews;