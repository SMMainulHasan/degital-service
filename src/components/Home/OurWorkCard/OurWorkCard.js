import React from 'react';
import './OurWorkCard.css';

const OurWorkCard = ({cardData}) => {
    const {image, title, detail} = cardData;
    return (
        <div className="project-card">
            <img className="work-img" src={image} alt="" />
            <div className="card-info">
                <h3 className="text-color-primary">{title}</h3>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default OurWorkCard;