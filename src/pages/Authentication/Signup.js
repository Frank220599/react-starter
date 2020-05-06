import React from 'react';
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <div className="sign section--bg section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form action="#" className="sign__form">
                                <Link to={"/"} className="sign__logo">
                                    <img src={require("../../assets/images/logo.svg")} alt=""/>
                                </Link>
                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="First name"/>
                                </div>
                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Last name"/>
                                </div>
                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Email"/>
                                </div>
                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Password"/>
                                </div>
                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Confirm Password"/>
                                </div>
                                <div className="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked="checked"/>
                                    <label htmlFor="remember">I agree to the
                                        <Link to="/privacy"> Privacy Policy</Link>
                                    </label>
                                </div>
                                <button className="sign__btn" type="button">Sign up</button>
                                <span className="sign__text">
                                    Already have an account?
                                    <Link to={"/auth/signin"}> Sign in!</Link>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
