import React from 'react';

const WhyChoose = () => {
    return (
        <div className='my-12 mx-3'>
            <h1 className='text-center text-3xl font-bold my-8'>Why Choose Fresh Food From Me</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-3">
                <div className='bg-lime-600	text-white py-6 font-bold text-3xl rounded'>100% <br /> Chemical Free</div>
                <div className='bg-lime-600	text-white py-5 font-bold text-3xl rounded'>24/7 <br /> Timely Delivery</div>
                <div className='bg-lime-600	text-white py-5 font-bold text-3xl rounded'>Collect <br /> From The Garden</div>
                
            </div>
        </div>
    );
};

export default WhyChoose;