import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const {image, title, price, detail} = service;
    return (
        <div className="col-md-3 d-flex flex-column service-card">
            <img src={image} alt=""/>
            <h3 className="text-center">{title}</h3>
            <h6 className="text-center text-color-primary"><strong>{price}</strong></h6>
            <p>{detail}</p>
        </div>
    );
};

export default ServiceCard;