import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({review, handleDelete}) => {
    const {_id, name, image, rating, message} = review;

    

    return (
        <div className='grid grid-cols-3 sm:grid-cols-5'>
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
            <div className='border p-4 w-full'>
                <button onClick={() => handleDelete(_id)} className='btn btn-error btn-outline btn-sm mr-3 mb-3 w-full'>Delete</button>
                <Link to={`/update/${_id}`}>
                <button className='btn btn-warning btn-outline btn-sm w-full'>Edit</button>
                </Link>
            </div>
        </div>
    );
};

export default MyReviewCard;