import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {Form, Formik, Field} from "formik";
import {connect} from "react-redux";
import {ResetPassword} from "../../store/actions/system";
import qs from "query-string";

const ForgotPassword = ({dispatch, history}) => {
    return (
        <div className="sign section--bg section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <Formik
                                initialValues={{email: ''}}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values) => {
                                    dispatch(
                                        ResetPassword(values, () => {
                                            history.push({
                                                pathname: '/auth/signin',
                                                search: qs.stringify({email: values.email})
                                            })
                                        })
                                    )
                                }}
                            >
                                {() => (
                                    <Form className="sign__form">
                                        <Link to={'/'} className="sign__logo">
                                            <img src={require("../../assets/images/logo.svg")} alt=""/>
                                        </Link>
                                        <div className="sign__group">
                                            <Field type="email" name={'email'} className="sign__input"
                                                   placeholder="Email"/>
                                        </div>
                                        <div className="sign__group sign__group--checkbox">
                                            <input id="remember" name="remember" type="checkbox" checked="checked"/>
                                            <label htmlFor="remember">I agree to the
                                                <Link to={"/privacy"}> Privacy Policy</Link></label>
                                        </div>
                                        <button className="sign__btn" type="submit">Reset Password</button>
                                        <span className="sign__text">We will send a password to your Email</span>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect()(withRouter(ForgotPassword));
