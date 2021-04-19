import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Sidebar.css';
import Profile from '../../../Image_Icon/Icon/profile.png';

const Sidebar = () => {
    const [user] = useContext(userContext);
    return (
        <div className="col-3 d-flex flex-column align-items-center sidebar">
            <h1 className="my-4">
                <Link className="navbar-brand" to="/"><span className="logo-first">DIGITAL</span><span className="logo-last">SERVICE</span></Link>
            </h1>
            <img className="profile-pic mb-5" src={user.displayPic || Profile} alt="" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Order Checkout</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/review">Review</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;