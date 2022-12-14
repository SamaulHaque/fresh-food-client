import React from 'react';

const ReviewCard = ({review}) => {
    const {name, image, rating, message} = review;
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4'>
           <div className='border p-4 w-full'>
                <img className='w-16 rounded' src={image} alt="user-img" />
            </div>
            <div className='border p-4 w-full'>
                <h2>{name}</h2>
            </div>
            
            <div className='border p-4 w-full'>
                <p>{message}</p>
            </div>
            <div className='border p-4 w-full'>
                <p>{rating} stars</p>
            </div>
        </div>
    );
};

export default ReviewCard;