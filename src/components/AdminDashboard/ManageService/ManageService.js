import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';

const ManageService = () => {
    const [servicesData, setServicesData] = useState([]);
    console.log(servicesData);
    useEffect(() => {
        fetch('https://sheltered-reef-89819.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

//handle delete service
    const handleDelete = (id) => {
        fetch(`https://sheltered-reef-89819.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if (data === true) {
                window.alert('Service deleted!')
                //remove deleted item without api reload 
                const newServiceList = servicesData.filter(service => service._id !== id)
                setServicesData(newServiceList);
            }
            else {
                window.alert('Sorry try again!')
            }
        })
    }

    return (
        <div className=" row">
            <AdminSidebar></AdminSidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">Manage Service</h2>
                <div className="pt-3 ps-5 me-5 order-list">
                    {
                        servicesData.map( serviceInfo => <ManageServiceCard serviceInfo={serviceInfo} handleDelete={handleDelete} key={serviceInfo._id}></ManageServiceCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageService;