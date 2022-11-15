import React from 'react';
import food1 from '../../assets/Fresh Foods/Food1.jpg'
import food2 from '../../assets/Fresh Foods/Food2.jpg'
import food3 from '../../assets/Fresh Foods/Food3.jpg'

const FoodGallery = () => {
    return (
        <div className='mt-4 mx-3'>
            <h2 className='text-center text-3xl font-semibold'>Fresh Food Gallery</h2>
            <p className='text-center'>See my food gallery and choose food  first and then <br />  order your favorite food.</p>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
            <img className='w-full h-60' src={food1} alt="" />
            <img className='w-full h-60' src={food2} alt="" />
            <img className='w-full h-60' src={food3} alt="" />
            </div>
        </div>
    );
};

export default FoodGallery;