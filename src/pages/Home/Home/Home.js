import React from 'react';
import Banner from '../Banner/Banner';
import FoodGallery from '../FoodGallery/FoodGallery';
import Services from '../../Shared/Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mb-12'>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center mt-8'>
            <Link to='/services'><button className='btn btn-outline' >See All Services</button></Link>
            </div>
            <WhyChoose></WhyChoose>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;