import React, {useEffect, useState} from 'react';

import Search from "./Search";
import Navigation from "./Navigation";
import Language from "./Language";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                <NavLink to={"/"} className="header__logo">
                                    <img src={require('../../../assets/images/logo.svg')} alt=""/>
                                </NavLink>
                                <Navigation/>
                                <div className="header__auth">
                                    <button
                                        onClick={() => setIsSearchActive(!isSearchActive)}
                                        className="header__search-btn"
                                    >
                                        <i className="icon ion-ios-search"/>
                                    </button>
                                    <Language/>
                                    <NavLink to={"/auth/signin"} className="header__sign-in">
                                        <i className="icon ion-ios-log-in"/>
                                        <span>sign in</span>
                                    </NavLink>
                                </div>
                                <button className="header__btn" type="button">
                                    <span/>
                                    <span/>
                                    <span/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Search isOpen={isSearchActive}/>
        </header>
    );
};

export default Header;
