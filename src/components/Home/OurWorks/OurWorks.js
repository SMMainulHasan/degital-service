import React from 'react';
import './OurWorks.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Work1 from '../../../Image_Icon/Image/website.webp';
import Work2 from '../../../Image_Icon/Image/website1.webp';
import Work3 from '../../../Image_Icon/Image/website2.webp';
import Work4 from '../../../Image_Icon/Image/website3.webp';
import OurWorkCard from '../OurWorkCard/OurWorkCard';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


// Data for Our Work Section//
const ourWorkData = [
    {
        image: Work1,
        title: "Lorem ipsum dolor",
        detail: "Lorem ipsum dolor sit amet."
    },
    {
        image: Work3,
        title: "Lorem ipsum dolor",
        detail: "Lorem ipsum dolor sit amet."
    },
    {
        image: Work2,
        title: "Lorem ipsum dolor",
        detail: "Lorem ipsum dolor sit amet."
    },
    {
        image: Work4,
        title: "Lorem ipsum dolor",
        detail: "Lorem ipsum dolor sit amet."
    }
]

const OurWorks = () => {
    return (
        <section className="our-works">
            <h5 className="text-color-primary text-center">Our Works</h5>
            <h2 className="text-color-primary fw-bold text-center">We build our project with love</h2>
            <div className="card-container">
                <Carousel responsive={responsive}>
                    {
                        ourWorkData.map(cardData => <OurWorkCard cardData={cardData}></OurWorkCard>)
                    }
                </Carousel>
            </div>
        </section>
    );
};

export default OurWorks;