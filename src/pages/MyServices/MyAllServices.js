import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
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

    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }
    return (
        <div className='mt-3 mx-3'>
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