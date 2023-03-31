import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="w-full mt-3 mx-3" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <img className='min-w-full  max-h-80' src={banner} alt="" />
        </div>
    );
};

export default Banner;