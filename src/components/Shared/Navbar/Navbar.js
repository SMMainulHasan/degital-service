import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import Profile from '../../../Image_Icon/Icon/profile.png'

const Navbar = () => {
    const [user, setUser] = useContext(userContext);
    const logout = () => {
        setUser({})
    }
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
                            <Link to="/" className="nav-link me-3 active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link me-3 active">About Us</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="nav-link me-3 active" >Projects</Link>
                        </li>
                        <li>
                            <Link to="/admin" className="nav-link me-3 active" >Contact</Link>
                        </li>
                        <li>
                            <Link to="/admin" className="nav-link me-3 active" >Admin</Link>
                        </li>
                        {
                            user.email ? <li><Link to="/login" className="nav-link me-3 active button" onClick={logout}>Logout</Link></li>
                                : <li><Link to="/login" className="nav-link me-3 active button">Login</Link></li>
                        }
                        <img src={user.displayPic || Profile} alt="" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;