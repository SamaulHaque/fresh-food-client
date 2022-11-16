import React from 'react';

const AddReview = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-center text-3xl font-bold mb-6'>Please Add Your Review.</h2>
         <form>
            <input type="text" name='name' placeholder="name" className="input input-bordered w-full mb-3" />
            <input type="text" name='image' placeholder="img url" className="input input-bordered w-full mb-3" />
            <textarea name='message' className="textarea textarea-bordered w-full mb-3" placeholder="Add Your Review"></textarea>

            <button className='btn btn-outline'>Submit Review</button>  
         </form>
        </div>
    );
};

export default AddReview;