import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddReview = () => {

    const {user} = useContext(AuthContext);

    const handelAddReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = user?.displayName || form.name.value;
        const email = user?.email || 'unregister';
        const image = user?.photoURL || form.image.value;
        const rating = form.rating.value;
        const message = form.message.value;

        const review = {
            name,
            email,
            image,
            rating,
            message
        }

        fetch('https://fresh-food-server.vercel.app/reviews', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)  
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged > 0){
                alert('Review Added Successfully.')
                form.reset();
            }
        })
        .catch(error => console.log(error))

    }

    return (
        <div className='mt-12 mx-3'>
            <h2 className='text-center text-3xl font-bold mb-6'>Please Add Your Review.</h2>
         <form onSubmit={handelAddReview}>
            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full mb-3" required/>

            <input type="email" name='email' readOnly defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full mb-3" required/>

            <input type="text" name='image' defaultValue={user?.photoURL} placeholder="Image URL" className="input input-bordered w-full mb-3" required/>

            <input type="text" name='rating' placeholder="Your Ratings" className="input input-bordered w-full mb-3" required/>

            <textarea name='message' className="textarea textarea-bordered w-full mb-3" placeholder="Please Type Your Review here" required></textarea>

            <input  type="submit" value='Submit Review' className='btn btn-outline' /> 
         </form>
        </div>
    );
};

export default AddReview;