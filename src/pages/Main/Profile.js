import React from 'react';
import {NavLink, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import get from "lodash/get"

import Breadcrumb from "../../components/Main/Breadcrumb";
import Settings from "../../sections/Main/Profile/Settings";
import Subscription from "../../sections/Main/Profile/Subscription";
import {Logout} from "../../store/actions/system";

const Profile = ({dispatch, history, user}) => {
    const logout = () => {
        dispatch(Logout(null, () => {
            history.push('/')
        }))
    };
    return (
        <>
            <Breadcrumb pageName={'My FlixGo'} linkName={'Profile'}/>
            <div className="content">
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="profile__content">
                                    <div className="profile__user">
                                        <div className="profile__avatar">
                                            <img src={require("../../assets/images/user.svg")} alt=""/>
                                        </div>
                                        <div className="profile__meta">
                                            <h3>{user.lastName} {user.firstName}</h3>
                                            <span>FlixGo ID: {user.id}</span>
                                        </div>
                                    </div>

                                    <ul className="nav nav-tabs content__tabs content__tabs--profile">
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName={'active'}
                                                to={'/user/profile/settings'}
                                                className="nav-link"
                                            >
                                                Profile
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName={'active'}
                                                to={'/user/profile/subscription'}
                                                className="nav-link"
                                            >
                                                Subscription
                                            </NavLink>
                                        </li>
                                    </ul>

                                    <div className="content__mobile-tabs content__mobile-tabs--profile"
                                         id="content__mobile-tabs">
                                        <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation"
                                             id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true"
                                             aria-expanded="false">
                                            <input type="button" value="Profile"/>
                                            <span/>
                                        </div>

                                        <div className="content__mobile-tabs-menu dropdown-menu"
                                             aria-labelledby="mobile-tabs">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#tab-1">Profile</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#tab-1">Subscription</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="profile__logout" onClick={logout}>
                                        <i className="icon ion-ios-log-out"/>
                                        <span>Logout</span>
                                    </button>
                                    {
                                        user.role && (user.role.name === 'Admin' || user.role.name === 'Moderator') &&
                                        <NavLink to={"/admin/dashboard"} className="header__sign-in active">
                                            <i className="icon ion-ios-log-in"/>
                                            <span>Admin Panel</span>
                                        </NavLink>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="tab-content" id="myTabContent">
                        <Route path={'/user/profile/settings'} component={Settings}/>
                        <Route path={'/user/profile/subscription'} component={Subscription}/>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    user: state.system.user.data
});

export default connect(mapStateToProps)(withRouter(Profile));
