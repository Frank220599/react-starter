import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="admin-header">
            <div className="admin-header__content">
                <NavLink to={'/admin/dashboard'} className="admin-header__logo">
                    <img src={require('../../assets/images/logo.svg')} alt=""/>
                </NavLink>
                <button className="admin-header__btn" type="button">
                    <spa/>
                    <spa/>
                    <spa/>
                </button>
            </div>
        </header>
    );
};

export default Header;
