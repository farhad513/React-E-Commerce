import React from 'react';
import img from '../../images/logo-2.png'
import './Footer.css';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container grid2">
                    <div className="box">
                        <img src={img} alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, doloremque. Cupiditate iure, odio cum tenetur quibusdam totam earum iusto. Unde?</p>
                        <div className="icon d_flex">
                            <div className="img d_flex">
                                <i className="fa-brands fa-google-play"></i>{" "}
                                <span> Google play</span>
                            </div>
                            <div className="img d_flex">
                                <i className="fa-brands fa-app-store-ios"></i>{" "} {" "}
                                <span> App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2>About US</h2>
                        <ul>
                            <li>Carreers</li>
                            <li>Our Stores</li>
                            <li>Teams and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center </li>
                            <li>How To Buy</li>
                            <li>Track Your Order </li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Returns & Refunds </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Contact Us </h2>
                        <ul>
                            <li>3870, Chatkhil, Chatkhil Proshova, Chatkhil Noakhali</li>
                            <li>Email: mdfarhadhossain0401@gmail.com</li>
                            <li>Phone: +88 01518-690471</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;