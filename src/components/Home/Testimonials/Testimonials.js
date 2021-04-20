import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from '../ReviewCard/ReviewCard';

const Testimonials = () => {
    const [reviews, setReviews] = useState();
    console.log(reviews);
    useEffect(() => {
        fetch('https://sheltered-reef-89819.herokuapp.com/getAllReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 900, min: 0 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };



    return (
        <section className="testimonials">
            <h2 className="text-center text-color-primary">Testimonials</h2>
            {
                reviews && <Carousel
                    className="container testimonials-container"
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={3000}
                    transitionDuration={1500}
                    responsive={responsive}>
                    {
                        reviews?.map(reviewData => <ReviewCard reviewData={reviewData}></ReviewCard>)
                    }
                </Carousel>
            }
        </section>
    );
};

export default Testimonials;