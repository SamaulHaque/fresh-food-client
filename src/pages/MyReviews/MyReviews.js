import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    useTitle('My Reviews')
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch(`https://fresh-food-server.vercel.app/my-reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = id => {
      
        const agree = window.confirm('Want to Delete?')
        if(agree){
            fetch(`https://fresh-food-server.vercel.app/my-reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully.');
                    const remainingReviews = reviews.filter(review => review._id !== id)
                    setReviews(remainingReviews)
                }
            })
        }
    } 
    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }

    return (
        <div className='mx-3' data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <h2 className='text-center text-3xl font-bold mb-6' >My Reviews</h2>
            {
                reviews.length > 0 ? 
                <>
               {
                 reviews.map(review => <MyReviewCard
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                    ></MyReviewCard>)
               }
                </> :
                
                <>
                <h2 className='text-center text-3xl font-bold  my-32' >No reviews were added</h2>
                </>
            }
        </div>
    );
};

export default MyReviews;