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
        </ul>

    );
};

export default Navigation;
