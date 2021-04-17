import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LinkedIn from '../../../Image_Icon/Icon/linkdin.png';
import Facebook from '../../../Image_Icon/Icon/fb.png';
import Instagram from '../../../Image_Icon/Icon/instagram.png';
import Youtube from '../../../Image_Icon/Icon/youtube.png';

const Footer = () => {
    return (
        <footer>
            <h1 className="text-center pb-5">
                <Link className="navbar-brand" to="/"><span className="logo-first">DIGITAL</span><span className="logo-last">SERVICE</span></Link>
            </h1>
            <div className="container row footer">
                <div className="col-md-5 offset-md-1">
                    <h2>ABOUT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati ipsam placeat nesciunt nihil neque, quibusdam maiores vero error accusantium!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit necessitatibus, magni ipsum deleniti modi excepturi aliquam dolor, magnam non quas omnis praesentium doloribus nobis dolorem quod.</p>
                </div>
                <div className="col-md-3 offset-md-1">
                    <h4>CONTACT</h4>
                    <p>South Matuail, Jatrabari, <br/> Dhaka- 1362</p>
                    <br/>
                    <p>Phone: +880170-133023</p>
                    <p>Email: mskdf@gmail.com</p>
                </div>
                <div className="col-md-2 social-link">
                    <h4>SOCIAL</h4>
                    <div className="footer-link">
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src={LinkedIn} alt=""/></a> <br/>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={Facebook} alt=""/></a> <br/>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={Instagram} alt=""/></a><br/>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><img src={Youtube} alt=""/></a>
                    </div>
                </div>
            </div>
            <hr/>
            <p className="text-center copyright">© COPYRIGHT 2021 BY DIGITALSERCIVE</p>
        </footer>
    );
};

export default Footer;