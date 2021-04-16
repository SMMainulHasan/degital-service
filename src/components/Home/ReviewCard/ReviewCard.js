import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({reviewData}) => {
    const {image, name, review} = reviewData;
    return (
        <div className="review-card d-flex flex-column align-items-center">
            <img src={image} alt=""/>
            <h5>{name}</h5>
            <p>{review}</p>
        </div>
    );
};

export default ReviewCard;