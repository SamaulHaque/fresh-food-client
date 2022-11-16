import React from 'react';

const MyReviewCard = ({review}) => {
    const {name, image, message} = review;

    return (
        <div className='flex justify-between'>
            <div className='border p-4 w-full'>
                <h2>{name}</h2>
            </div>
            <div className='border p-4 w-full'>
                <img className='w-32' src={image} alt="user-img" />
            </div>
            <div className='border p-4 w-full'>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default MyReviewCard;