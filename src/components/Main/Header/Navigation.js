import React, {useEffect, useState} from 'react';
import cx from "classnames"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        document.querySelector('.body').addEventListener('click', e => {
            if (!e.target.classList.contains('header__dropdown-menu')) {
                setIsOpen(false)
            }
        })
    }, []);
    return (
        <ul className="header__nav">
            <li className="header__nav-item">
                <NavLink to={'/'} className="header__nav-link">Home</NavLink>
            </li>
            <li className="header__nav-item">
                <NavLink to={'/movies'} className="header__nav-link">Catalog</NavLink>
            </li>
            <li className="header__nav-item">
                <NavLink to={'/pricing'} className="header__nav-link">Pricing Plan</NavLink>
            </li>
            <li className="header__nav-item">
                <NavLink to={'/faq'} className="header__nav-link">Help</NavLink>
            </li>
            <li
                className="dropdown header__nav-item"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span
                    className="header__nav-link header__nav-link--more"
                >
                    <i className="icon ion-ios-more"/>
                </span>
                <ul
                    onBlur={() => setIsOpen(false)}
                    className={cx(["dropdown-menu header__dropdown-menu", {show: isOpen}])}
                >
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/user/profile/settings"}>Profile</NavLink></li>
                    <li><NavLink to={"/auth/signin"}>Sign In</NavLink></li>
                    <li><NavLink to={"/auth/signup"}>Sign Up</NavLink></li>
                    <li><NavLink to={"/auth/forgot-password"}>Forgot password</NavLink></li>
                    <li><NavLink to={"/privacy"}>Privacy Policy</NavLink></li>
                    <li><NavLink to={"/contacts"}>Contacts</NavLink></li>
                </ul>
            </li>
        </ul>

    );
};

export default Navigation;