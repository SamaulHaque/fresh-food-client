import React from 'react';
import Banner from '../Banner/Banner';
import FoodGallery from '../FoodGallery/FoodGallery';
import Services from '../../Shared/Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mb-12'>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center mt-8'>
            <Link to='/my-all-services'><button className='btn btn-outline' >See All Services</button></Link>
            </div>
            <WhyChoose></WhyChoose>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;