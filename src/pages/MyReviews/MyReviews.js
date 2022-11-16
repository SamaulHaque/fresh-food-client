import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = id => {
        const agree = window.confirm('Want to Delete?')
        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }  

    return (
        <div>
            
            {
                reviews.map(review => <MyReviewCard
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;