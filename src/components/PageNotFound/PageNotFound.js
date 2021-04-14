import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="not-found">
                <h1>Sorry :( Page not found: 401</h1>
            </div>
        </>
    );
};

export default PageNotFound;