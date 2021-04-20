import React, { useState } from 'react';

const OrderDataRow = ({ orderData }) => {
    const { _id, name, email, serviceDetail, status } = orderData;
    const [serviceStatus, setServiceStatus] = useState();

    const handleStatus = e => {
        const newStatus = e.target.value;

        fetch(`http://localhost:8080/updateStatus/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status: newStatus }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                data && setServiceStatus(newStatus)
            })
    }


    let rowClass;
    if(serviceStatus === "Pending" || status === "Pending"){
        rowClass= "table-danger"
    }
    if(serviceStatus === "Working on" || status === "Working on"){
        rowClass= "table-warning"
    }
    if(serviceStatus === "Done" || status === "Done"){
        rowClass= "table-success"
    }

    return (
        <tr className={rowClass}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceDetail.title}</td>
            <td>
                <select onChange={handleStatus} value={serviceStatus || status}>
                    <option value="Pending">Pending</option>
                    <option value="Working on">Working on</option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default OrderDataRow;