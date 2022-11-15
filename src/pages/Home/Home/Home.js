import React from 'react';
import FoodGallery from '../../FoodGallery/FoodGallery';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mb-6'>
            <Banner></Banner>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;