import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="w-full">
            <img className='min-w-full max-h-80' src={banner} alt="" />
        </div>
    );
};

export default Banner;