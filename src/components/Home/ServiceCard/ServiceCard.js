import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const history = useHistory();
    const {image, title, price, detail, serviceId} = service;
    return (
        <div className="col-md-3 d-flex flex-column service-card" onClick={()=> history.push("/order-checkout/"+serviceId)}>
            <img src={image} alt=""/>
            <h3 className="text-center">{title}</h3>
            <h6 className="text-center text-color-primary"><strong>{price}</strong></h6>
            <p>{detail}</p>
        </div>
    );
};

export default ServiceCard;