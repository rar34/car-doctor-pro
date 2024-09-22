import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    // console.log(service)
    const { img, title, price } = service || {};
    return (
        <div className="card card-compact bg-base-100 border p-6">
            <figure>
                <Image className='rounded-lg' src={img} height={300} width={400} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className='text-primary flex justify-between items-center'>
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <FaArrowRight className='text-xl' />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;