import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to={'/admin/dashboard'} className="sidebar__logo">
                <img src={require('../../assets/images/logo.svg')} alt=""/>
            </NavLink>

            <div className="sidebar__user">
                <div className="sidebar__user-img">
                    <img src={require('../../assets/images/user.svg')} alt=""/>
                </div>

                <div className="sidebar__user-title">
                    <span>Admin</span>
                    <p>John Doe</p>
                </div>

                <button className="sidebar__user-btn" type="button">
                    <i className="icon ion-ios-log-out"/>
                </button>
            </div>

            <ul className="sidebar__nav">
                <li className="sidebar__nav-item">
                    <NavLink
                        to="/admin/dashboard"
                        className="sidebar__nav-link"
                        activeClassName={"sidebar__nav-link--active"}
                    >
                        <i className="icon ion-ios-keypad"/> Dashboard
                    </NavLink>
                </li>

                <li className="sidebar__nav-item">
                    <NavLink
                        to="/admin/catalog"
                        className="sidebar__nav-link"
                        activeClassName={"sidebar__nav-link--active"}
                    >
                        <i className="icon ion-ios-film"/> Catalog
                    </NavLink>
                </li>

                <li className="sidebar__nav-item">
                    <NavLink
                        to="/admin/users"
                        className="sidebar__nav-link"
                        activeClassName={"sidebar__nav-link--active"}
                    >
                        <i className="icon ion-ios-contacts"/> Users
                    </NavLink>
                </li>

                <li className="sidebar__nav-item">
                    <NavLink
                        to="/admin/comments"
                        className="sidebar__nav-link"
                        activeClassName={"sidebar__nav-link--active"}
                    >
                        <i className="icon ion-ios-chatbubbles"/> Comments
                    </NavLink>
                </li>

                <li className="sidebar__nav-item">
                    <NavLink
                        to="/admin/reviews"
                        className="sidebar__nav-link"
                        activeClassName={"sidebar__nav-link--active"}
                    >
                        <i className="icon ion-ios-star-half"/> Reviews
                    </NavLink>
                </li>

                {/*<li className="sidebar__nav-item">*/}
                {/*    <a href="reviews.html" className="sidebar__nav-link"><i*/}
                {/*        className="icon ion-ios-trash"/> Add item</a>*/}
                {/*</li>*/}
                {/*<li className="sidebar__nav-item">*/}
                {/*    <a href="reviews.html" className="sidebar__nav-link"><i*/}
                {/*        className="icon ion-ios-trash"/> Edit user</a>*/}
                {/*</li>*/}

            </ul>

            <div className="sidebar__copyright">© 2019 FlixGo. <br/>Create by <a
                href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank">Dmitry Volkov</a></div>
        </div>
    );
};

export default Sidebar;
