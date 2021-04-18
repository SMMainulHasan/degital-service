import React from 'react';
import './OrderedServiceCard.css';

const OrderedServiceCard = ({orderedService}) => {
    const { image, title, status, detail} = orderedService;
    return (
        <div className="OrderedServiceCard" >
            <div className="d-flex justify-content-between top-part">
                <img src={image} alt=""/>
                <p className="status text-center"><strong>{status}</strong></p>
            </div>
            <div className="detail">
                <h4>{title}</h4>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default OrderedServiceCard;