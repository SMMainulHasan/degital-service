import React from 'react';
import './Testimonials.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DameyImage from '../../../Image_Icon/Image/website.webp'
import ReviewCard from '../ReviewCard/ReviewCard';

const Testimonials = () => {

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
        <div>
            <Carousel responsive={responsive}>
                {
                    reviews.map(reviewData => <ReviewCard reviewData={reviewData}></ReviewCard>)
                }
            </Carousel>
        </div>
    );
};

export default Testimonials;