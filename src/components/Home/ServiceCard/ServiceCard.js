import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const history = useHistory();
    const {imageUrl, title, price, detail, serviceId} = service;
    return (
        <div className="col-md-3 d-flex flex-column service-card" onClick={()=> history.push("/dash-right-side/"+serviceId)}>
            <img src={imageUrl} alt=""/>
            <h3 className="text-center">{title}</h3>
            <h6 className="text-center text-color-primary"><strong>{price}</strong></h6>
            <p>{detail}</p>
        </div>
    );
};

export default ServiceCard;