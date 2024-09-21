import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                {
                    banners.map((banner, idx) => (
                        <div style={{
                            backgroundImage: `linear-gradient(45deg,rgba(7,25,42,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${idx+1}.jpg)`
                        }} key={idx} id={`slide${idx+1}`} className="carousel-item relative h-screen w-full">
                            <div>
                                <h1>{banner.title}</h1>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={banner.prev} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};


const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide2",
        prev: "#slide4"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide3",
        prev: "#slide1"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide4",
        prev: "#slide2"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide1",
        prev: "#slide3"
    },
]


export default Banner;