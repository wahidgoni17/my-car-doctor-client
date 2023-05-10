import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4550/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    }, [])

    return (
        <div className='mt-5'>
            <div className='text-center my-3'>
                <h2 className="text-2xl text-orange-500 font-bold">Service</h2>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid p-4 gap-5 grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;