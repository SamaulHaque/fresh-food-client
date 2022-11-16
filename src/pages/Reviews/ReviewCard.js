import React from 'react';

const ReviewCard = ({review}) => {
    const {name, image, message} = review;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ReviewCard;