import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import Profile from '../../../Image_Icon/Icon/profile.png';

const AdminSidebar = () => {
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
                    <Link to="/order-list">Order list</Link>
                </li>
                <li>
                    <Link to="/add-service">Add Service</Link>
                </li>
                <li>
                    <Link to="/manage-service">Manage Service</Link>
                </li>
                <li>
                    <Link to="/add-admin">Add Admin</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;