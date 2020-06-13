import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {Field, Form, withFormik, ErrorMessage} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {Signup} from "../store/actions/system";

let SignupForm = ({values}) => {
    return (
        <Form className="sign__form">
            <Link to={"/"} className="sign__logo">
                <img src={require("../assets/images/logo.svg")} alt=""/>
            </Link>
            <div className="sign__group">
                <ErrorMessage name={'firstName'} className={'validation-error'} component={'div'}/>
                <Field name={'firstName'} type="text" className="sign__input" placeholder="First name"/>
            </div>
            <div className="sign__group">
                <ErrorMessage name={'lastName'} className={'validation-error'} component={'div'}/>
                <Field name={'lastName'} type="text" className="sign__input" placeholder="Last name"/>
            </div>
            <div className="sign__group">
                <ErrorMessage name={'email'} className={'validation-error'} component={'div'}/>
                <Field name={'email'} type="email" className="sign__input" placeholder="Email"/>
            </div>
            <div className="sign__group">
                <ErrorMessage name={'password'} className={'validation-error'} component={'div'}/>
                <Field name={'password'} type="password" className="sign__input" placeholder="Password"/>
            </div>
            <div className="sign__group">
                <ErrorMessage name={'passwordConfirmation'} className={'validation-error'} component={'div'}/>
                <Field name={'passwordConfirmation'} type="password" className="sign__input"
                       placeholder="Confirm Password"/>
            </div>
            <ErrorMessage name={'remember'} className={'validation-error'} component={'div'}/>
            <div className="sign__group sign__group--checkbox">
                <Field id="remember" name="remember" type="checkbox" checked={values.remember}/>
                <label htmlFor="remember">I agree to the
                    <Link to="/privacy"> Privacy Policy</Link>
                </label>
            </div>
            <button className="sign__btn" type="submit  ">Sign up</button>
            <span className="sign__text">
                Already have an account?
                <Link to={"/auth/signin"}> Sign in!</Link>
            </span>
        </Form>
    );
};


SignupForm = withFormik({
    validationSchema: () => Yup.object().shape({
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Required'),
        password: Yup.string().min(6)
            .required('Required'),
        passwordConfirmation: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        remember: Yup.boolean()
            .required("The terms and conditions must be accepted.")
            .oneOf([true], "The terms and conditions must be accepted.")
    }),
    mapPropsToValues: (props) => {
        return ({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            passwordConfirmation: '',
            remember: false
        })
    },
    handleSubmit: (values, {props: {dispatch, history}, resetForm, setSubmitting}) => {
        dispatch(Signup(values, () => {
            setSubmitting(false);
            resetForm({});
            history.push('/auth/signin');
        }, () => {
            console.log('fucking error callback')
        }))
    }
})(SignupForm);


export default connect()(withRouter(SignupForm))

