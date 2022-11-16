import React from 'react';
import Banner from '../Banner/Banner';
import FoodGallery from '../FoodGallery/FoodGallery';
import Services from '../../Shared/Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div className='mb-12'>
            <Banner></Banner>
            <Services></Services>
            <WhyChoose></WhyChoose>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;