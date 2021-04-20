import React from 'react';
import './OrderedServiceCard.css';

const OrderedServiceCard = ({orderedService}) => {
    const {status, serviceDetail}=orderedService;
    const { imageUrl, title, detail} = serviceDetail;

    let style;
    if (status === "Pending") {
       style = { backgroundColor: "red" }
    }
    if (status === "Working on") {
       style = { backgroundColor: "orange" }
    }
    if (status === "Done") {
       style = { backgroundColor: "green" }
    }

    return (
        <div className="OrderedServiceCard " >
            <div className="d-flex justify-content-between top-part">
                <img src={imageUrl} alt=""/>
                <p className="status text-center" style={style}><strong>{status}</strong></p>
            </div>
            <div className="detail">
                <h4>{title}</h4>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default OrderedServiceCard;