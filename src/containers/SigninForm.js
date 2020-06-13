import React from 'react';
import {Field, Form, withFormik, ErrorMessage} from "formik";
import {Link, withRouter} from "react-router-dom";
import * as Yup from "yup";
import {Signin} from "../store/actions/system";
import {connect} from "react-redux";
import qs from "query-string";

let SigninForm = ({values}) => {
    return (
        <Form className="sign__form">
            <Link to={'/'} className="sign__logo">
                <img src={require("../assets/images/logo.svg")} alt=""/>
            </Link>
            <div className="sign__group">
                <ErrorMessage name={'email'} className={'validation-error'} component={'div'}/>
                <Field type="email" name={'email'} className="sign__input" placeholder="Email"/>
            </div>
            <div className="sign__group">
                <ErrorMessage name={'password'} className={'validation-error'} component={'div'}/>
                <Field type="password" name={'password'} className="sign__input" placeholder="Password"/>
            </div>
            <div className="sign__group sign__group--checkbox">
                <Field id="remember" name="remember" type="checkbox" checked={values.remember}/>
                <label htmlFor="remember">Remember Me</label>
            </div>
            <button className="sign__btn" type="submit">Sign in</button>
            <span className="sign__text">
                Don't have an account?
                <Link to={"/auth/signup"}> Sign up!</Link>
            </span>
            <span className="sign__text">
                <Link to={"/auth/forgot-password"}>Forgot password?</Link>
            </span>
        </Form>
    );
};

SigninForm = withFormik({
    validationSchema: () => Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Required'),
        password: Yup.string().min(6).required('Required'),
    }),
    mapPropsToValues: (props) => {
        console.log(qs.parse(props.location.search))
        return ({
            email: qs.parse(props.location.search).email || '',
            password: ''
        })
    },
    handleSubmit: (values, {props: {dispatch, history}, setSubmitting, resetForm}) => {
        dispatch(Signin(values, () => {
            setSubmitting(false);
            resetForm({});
            history.push('/pricing');
        }, () => {
            console.log('fucking error callback')
        }))
    }
})(SigninForm);


export default connect()(withRouter(SigninForm))
