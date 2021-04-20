import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({reviewData}) => {
    const {displayPic, name, review} = reviewData;
    return (
        <div className="review-card d-flex flex-column align-items-center">
            <img src={displayPic} alt=""/>
            <h5>{name}</h5>
            <p>{review}</p>
        </div>
    );
};

export default ReviewCard;