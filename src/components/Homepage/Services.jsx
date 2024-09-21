import React from 'react';
import {services} from '../../lib/services.js'
import ServiceCard from '../card/ServiceCard';

const Services = () => {
    // console.log(services)
    return (
        <div>
            <div className='space-y-4 text-center'>
                <h4 className='text-xl font-bold text-primary'>Service</h4>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-32'>
                {
                    services.map(service => (
                        <ServiceCard key={service._id} service={service}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;