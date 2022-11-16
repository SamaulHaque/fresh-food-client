import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-20'>
            <h2 className='text-center text-3xl font-bold mb-8'>My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                  services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
                  ></ServiceCard>)  
                }
            </div>
        </div>
    );
};

export default Services;