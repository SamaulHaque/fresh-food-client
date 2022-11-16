import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const Reviews = () => {
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
        </div>
    );
};

export default Reviews;