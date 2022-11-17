import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';


const MyAllServicesCard = ({service}) => {
    const {_id, price, title, img, description} = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <PhotoProvider>
            <PhotoView  src={img}>
            <figure><img className='h-40 w-full' src={img} alt="" /></figure>
            </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-xl font-bold'>Price: ${price}</p>
                <p className='text-justify'>
                    {
                        description.length > 100 ?
                            <>{description?.slice(0, 100) + '...'} <Link to={`/services/${_id}`}>Read More</Link></>
                            : <>{description}</>
                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn  btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
export default MyAllServicesCard;