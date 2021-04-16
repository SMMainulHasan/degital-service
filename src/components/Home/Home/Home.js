import React from 'react';
import Header from '../Header/Header';
import OurClient from '../OurClient/OurClient';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurWorks></OurWorks>
            <Services></Services>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;