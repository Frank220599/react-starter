import React, {useState} from 'react';

import Search from "./Search";
import Navigation from "./Navigation";
import Language from "./Language";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({user}) => {
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
                                    {
                                        user.isAuthenticated ?
                                            <NavLink to={"/user/profile/settings"} className="header__sign-in">
                                                <i className="icon ion-ios-log-in"/>
                                                <span>profile</span>
                                            </NavLink>
                                            : <NavLink to={"/auth/signin"} className="header__sign-in">
                                                <i className="icon ion-ios-log-in"/>
                                                <span>sign in</span>
                                            </NavLink>
                                    }
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
            <Search isOpen={isSearchActive} setIsOpen={setIsSearchActive}/>
        </header>
    );
};

const mapStateToProps = state => ({
    user: state.system.user
});

export default connect(mapStateToProps)(Header);
