import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="container navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <h1>
                    <Link class="navbar-brand" to="/">DIGITAL<span>SERVICE</span></Link>
                </h1>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link me-3 active" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us" class="nav-link me-3 active" aria-current="page">About Us</Link>
                        </li>
                        <li>
                            <Link to="/projects" class="nav-link me-3 active" aria-current="page">Projects</Link>
                        </li>
                        <li>
                            <Link to="/admin" class="nav-link me-3 active" aria-current="page">Contact</Link>
                        </li>
                        <li>
                            <Link to="/admin" class="nav-link me-3 active" aria-current="page">Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;