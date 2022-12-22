import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import FoodGallery from '../FoodGallery/FoodGallery';
import Services from '../../Shared/Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Home = () => {
    useTitle('Home')
    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }
    return (
        <div className='mb-12'>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center mt-8 mx-3'>
            <Link to='/my-all-services'><button className='btn btn-outline' >See All Services</button></Link>
            </div>
            <WhyChoose></WhyChoose>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;