import React from 'react';
import payment1 from '../../../assets/Payment Pic/Payment-1.png'
import payment2 from '../../../assets/Payment Pic/Payment-2.png'
import payment3 from '../../../assets/Payment Pic/Payment-3.png'
import payment4 from '../../../assets/Payment Pic/Payment-4.png'
const Payment = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>Payment With</h2>
            <div className='mt-5 grid grid-cols-4 gap-6'>
                <img className='w-full h-24 rounded' src={payment1} alt="" />
                <img className='w-full h-24 rounded' src={payment2} alt="" />
                <img className='w-full h-24 rounded' src={payment3} alt="" />
                <img className='w-full h-24 rounded' src={payment4} alt="" />
            </div>
        </div>
    );
};

export default Payment;