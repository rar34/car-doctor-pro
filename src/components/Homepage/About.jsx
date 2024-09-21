import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='my-32'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                    <div className='relative'>
                        <Image className='' src={`/assets/images/about_us/person.jpg`} height={500} width={460} alt='person' />
                        <Image className='absolute -bottom-20 right-40 border-8 border-white' src={`/assets/images/about_us/parts.jpg`} height={350} width={330} alt='person' />
                    </div>

                </div>
                <div className='space-y-7'>
                    <h3 className='text-xl font-bold text-primary'>About Us</h3>
                    <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <button className='btn btn-primary'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;