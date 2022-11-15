import React from 'react';
import food1 from '../../../assets/Fresh Foods/Food1.jpg'
import food2 from '../../../assets/Fresh Foods/Food2.jpg'
import food3 from '../../../assets/Fresh Foods/Food3.jpg'
import food4 from '../../../assets/Fresh Foods/Food4.jpg'
import food5 from '../../../assets/Fresh Foods/Food5.jpg'
import food6 from '../../../assets/Fresh Foods/Food6.jpg'

const FoodGallery = () => {
    return (
        <div className='mt-4 mx-3 my-8'>
            <h2 className='text-center text-3xl font-bold'>Fresh Food Gallery</h2>
            <p className='text-center font-semibold'>See my food gallery and choose food  first and then <br />  order your favorite food.</p>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
            <img className='w-full h-60' src={food1} alt="" />
            <img className='w-full h-60' src={food2} alt="" />
            <img className='w-full h-60' src={food3} alt="" />
            <img className='w-full h-60' src={food4} alt="" />
            <img className='w-full h-60' src={food5} alt="" />
            <img className='w-full h-60' src={food6} alt="" />
            </div>
        </div>
    );
};

export default FoodGallery;