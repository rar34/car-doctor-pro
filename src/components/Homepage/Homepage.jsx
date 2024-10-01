import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Homepage = () => {
    return (
        <div className='container px-3 mx-auto my-10'>
            <Banner />
            <About />
            <Services />
        </div>
    );
};


export default Homepage;