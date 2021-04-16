import React from 'react';
import './Testimonials.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DameyImage from '../../../Image_Icon/Image/website.webp'
import ReviewCard from '../ReviewCard/ReviewCard';

const Testimonials = () => {

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

    const reviews = [
        {
            image: DameyImage,
            name: "khaled Uddin",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tenetur."
        },
        {
            image: DameyImage,
            name: "khaled Uddin",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tenetur."
        },
        {
            image: DameyImage,
            name: "khaled Uddin",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tenetur."
        },
        {
            image: DameyImage,
            name: "khaled Uddin",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tenetur."
        },
        {
            image: DameyImage,
            name: "khaled Uddin",
            review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tenetur."
        }
    ]


    return (
        <section className="testimonials">
            <h2 className="text-center text-color-primary">Testimonials</h2>
            <Carousel
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
                    reviews.map(reviewData => <ReviewCard reviewData={reviewData}></ReviewCard>)
                }
            </Carousel>
        </section>
    );
};

export default Testimonials;