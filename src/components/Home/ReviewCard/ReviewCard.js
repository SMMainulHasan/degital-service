import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({reviewData}) => {
    const {image, name, review} = reviewData;
    return (
        <div className="review-card d-flex flex-column justify-content-center">
            <img src={image} alt=""/>
            <h4>{name}</h4>
            <p>{review}</p>
        </div>
    );
};

export default ReviewCard;