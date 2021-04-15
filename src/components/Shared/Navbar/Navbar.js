import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <h1>
                    <Link className="navbar-brand" to="/"><span className="logo-first">DIGITAL</span><span className="logo-last">SERVICE</span></Link>
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-link-lists">
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-3 active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link me-3 active" aria-current="page">About Us</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="nav-link me-3 active" aria-current="page">Projects</Link>
                        </li>
                        <li>
                            <Link to="/admin" className="nav-link me-3 active" aria-current="page">Contact</Link>
                        </li>
                        <li>
                            <Link to="/admin" className="nav-link me-3 active" aria-current="page">Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;