import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({review, handleDelete}) => {
    const {_id, name, image, message} = review;

    

    return (
        <div className='flex justify-between'>
            <div className='border p-4 w-full'>
                <h2>{name}</h2>
            </div>
            <div className='border p-4 w-full'>
                <img className='w-16 rounded' src={image} alt="user-img" />
            </div>
            <div className='border p-4 w-full'>
                <p>{message}</p>
            </div>
            <div className='border p-4 w-full'>
                <button onClick={() => handleDelete(_id)} className='btn btn-error btn-outline btn-sm mr-3'>Delete</button>
                <Link to={`/update/${_id}`}>
                <button className='btn btn-warning btn-outline btn-sm'>Edit</button>
                </Link>
            </div>
        </div>
    );
};

export default MyReviewCard;