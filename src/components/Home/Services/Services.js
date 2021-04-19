import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/getServices')
        .then(res => res.json())
        .then(data => setServicesData(data))
    }, [])
    

    return (
        <section className="services">
            <h5 className="text-color-primary text-center">Services</h5>
            <h3 className="text-color-primary text-center">WE DESIGN DIGITAL PRODUCTS THAT <br /> HELP GROW BUSINESSES.</h3>
            <div className="row justify-content-center services-container">
                {
                    servicesData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;