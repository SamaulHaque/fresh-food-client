import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState({})
    console.log(reviews)
    
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    return (
        <div>
            
            {
                reviews.map(review => <MyReviewCard
                key={review._id}
                review={review}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;