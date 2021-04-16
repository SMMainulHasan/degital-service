import React from 'react';
import Header from '../Header/Header';
import OurClient from '../OurClient/OurClient';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurWorks></OurWorks>
            <Services></Services>
            <OurClient></OurClient>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;