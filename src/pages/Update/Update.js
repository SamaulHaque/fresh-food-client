import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Update = () => {
    const storedUser = useLoaderData()
    const [user, setUser] = useState(storedUser)

    const handelUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || form.name.value;
        const email = user?.email || 'unregister';
        const image = user?.photoURL || form.image.value;
        const message = storedUser.message || form.message.value;

        

        fetch(`https://fresh-food-server.vercel.app/my-reviews/${storedUser._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)  
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Review Updated Successfully.')
                form.reset();
            }
        })
        .catch(error => console.error(error))

    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user};
        newUser [field] =value;
        setUser(newUser)
    }
    return (
        <div className='mt-12'>
            <h2 className='text-center text-3xl font-bold mb-6'>Update Your Review.</h2>
         <form onSubmit={handelUpdateReview}>
            <input onChange={handleInputChange} type="text" name='name' defaultValue={storedUser?.name} placeholder="Your Name" className="input input-bordered w-full mb-3" required/>
            <input onChange={handleInputChange} type="email" name='email' readOnly defaultValue={storedUser?.email} placeholder="Your Email" className="input input-bordered w-full mb-3" required/>
            <input onChange={handleInputChange} type="text" name='image' defaultValue={storedUser?.image} placeholder="Image URL" className="input input-bordered w-full mb-3" required/>
            <textarea onChange={handleInputChange} name='message' defaultValue={storedUser?.message} className="textarea textarea-bordered w-full mb-3" placeholder="Please Type Your Review here" required></textarea>

            <input  type="submit" value='Submit Update' className='btn btn-outline' /> 
         </form>
        </div>
    );
};

export default Update;