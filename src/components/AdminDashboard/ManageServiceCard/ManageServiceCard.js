import React from 'react';
import './ManageServiceCard.css';
import Delete from '../../../Image_Icon/Icon/delete.png'


const ManageServiceCard = ({serviceInfo, handleDelete}) => {
    const {imageUrl, title, detail, _id} = serviceInfo;

    


    return (
        <div className="manage-service-card" >
            <div className="d-flex justify-content-between top-part">
                <img src={imageUrl} alt="" />
                <img className="delete" onClick={ ()=>handleDelete(_id)} src={Delete} alt="" />
            </div>
            <div className="detail">
                <h4>{title}</h4>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default ManageServiceCard;