import React from 'react';
import './Services.css';
import WebDevelopment from '../../../Image_Icon/Image/web-dev.svg';
import UiDesigning from '../../../Image_Icon/Image/ux-ui.svg';
import GraphicDesign from '../../../Image_Icon/Image/graphic.svg';
import AppDevelopment from '../../../Image_Icon/Image/app-dev.svg';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const servicesData = [
        {
            image: WebDevelopment ,
            title: "Website Development",
            price: "$400",
            detail: "Web Development consists of two segments front end development and backend development."
        },
        {
            image: AppDevelopment,
            title: "App Development",
            price: "$1000",
            detail: "With the world going mobile, the importance of apps is increasing by the day. App development hence refers to the creation of applications to be used on mobile devices."
        },
        {
            image: UiDesigning,
            title: "UI/UX Designing",
            price: "$250",
            detail: "This course UX & UI Design is designed for those people, who wants to design anything to keep users on first priority and working on to make them happy."
        },
        {
            image: GraphicDesign,
            title: "Graphic Designing",
            price: "$300",
            detail: "The main purpose here is to make you able to use graphic design tools and techniques in a professional way. Graphic Design helps to build brand identity of a company."
        }
    ]

    return (
        <section className="services">
            <h5 className="text-color-primary text-center">Services</h5>
            <h3 className="text-color-primary text-center">WE DESIGN DIGITAL PRODUCTS THAT <br /> HELP GROW BUSINESSES.</h3>
            <div className= "row justify-content-center services-container">
                {
                    servicesData.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;