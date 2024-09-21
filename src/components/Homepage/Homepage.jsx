import React from 'react';
import Banner from './Banner';
import About from './About';

const Homepage = () => {
    return (
        <div className='container mx-auto my-10'>
            <Banner />
            <About />
        </div>
    );
};


export default Homepage;