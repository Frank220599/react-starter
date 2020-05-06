import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h6 className="footer__title">Download Our App</h6>
                        <ul className="footer__app">
                            <li><a href="#"><img src={require('../../../assets/images/Download_on_the_App_Store_Badge.svg')} alt=""/></a></li>
                            <li><a href="#"><img src={require('../../../assets/images/google-play-badge.png')} alt=""/></a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <h6 className="footer__title">Resources</h6>
                        <ul className="footer__list">
                            <li><Link to={'/about'}>About Us</Link></li>
                            <li><Link to={'/pricing'}>Pricing Plan</Link></li>
                            <li><Link to={'/faq'}>Help</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <h6 className="footer__title">Legal</h6>
                        <ul className="footer__list">
                            <li><Link to={'/privacy'}>Terms of Use</Link></li>
                            <li><Link to={'/privacy'}>Privacy Policy</Link></li>
                            <li><Link to={'/privacy'}>Security</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3">
                        <h6 className="footer__title">Contact</h6>
                        <ul className="footer__list">
                            <li><a href="tel:+18002345678">+998 (99) 884-58-81</a></li>
                            <li><a href="mailto:support@moviego.com">mr.frank220599@gmail.com</a></li>
                        </ul>
                        <ul className="footer__social">
                            <li className="facebook"><a href="#"><i className="icon ion-logo-facebook"/></a></li>
                            <li className="instagram"><a href="#"><i className="icon ion-logo-instagram"/></a></li>
                            <li className="twitter"><a href="#"><i className="icon ion-logo-twitter"/></a></li>
                            <li className="vk"><a href="#"><i className="icon ion-logo-vk"/></a></li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <div className="footer__copyright">
                            <small>© 2018 FlixGo. Create by Zokirov Farrux</small>

                            <ul>
                                <li><a href="privacy.html">Terms of Use</a></li>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
