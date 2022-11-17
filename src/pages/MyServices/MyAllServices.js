import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MyAllServicesCard from './MyAllServicesCard';

const MyAllServices = () => {
    useTitle('My Services')
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://fresh-food-server.vercel.app/my-all-services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-3'>
            <h2 className='text-center text-3xl font-bold mb-8'>Here All Fresh Food Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                  services.map(service => <MyAllServicesCard
                  key={service._id}
                  service={service}
                  ></MyAllServicesCard>)  
                }
            </div>
        </div>
    );
};

export default MyAllServices;