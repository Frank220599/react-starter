import React from 'react';
import {Field, Form, withFormik, ErrorMessage} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {UserUpdate} from "../store/actions/system";

export const InputField = ({label, name, type='text'}) => (
    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
        <div className="profile__group">
            <label className="profile__label" htmlFor="name">{label}</label>
            <Field
                id={name}
                type={type}
                name={name}
                className="profile__input"
            />
            <ErrorMessage name={name} className={'validation-error'} component={'div'}/>
        </div>
    </div>
);

let ProfileDetailsForm = ({values}) => {
    return (
        <Form className="profile__form">
            <div className="row">
                <div className="col-12">
                    <h4 className="profile__title">Profile details</h4>
                </div>
                <InputField
                    name={'email'}
                    label={'Email'}
                />
                <InputField
                    name={'username'}
                    label={'Username'}
                />

                <InputField
                    name={'firstName'}
                    label={'First Name'}
                />

                <InputField
                    name={'lastName'}
                    label={'Last Name'}
                />

                <div className="col-12">
                    <button className="profile__btn" type="submit">Save</button>
                </div>
            </div>
        </Form>
    );
};

ProfileDetailsForm = withFormik({
    enableReinitialize: true,
    validationSchema: () => Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Required'),
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
    }),
    mapPropsToValues: (props) => {
        const {user} = props;
        return ({
            email: user.email || '',
            firstName: user.firstName || '',
            lastName: user.lastName || ''
        })
    },
    handleSubmit: (values, {props: {dispatch, user, history}, setSubmitting, resetForm}) => {
        dispatch(
            UserUpdate({
                id: user.id,
                ...values
            })
        )
    }
})(ProfileDetailsForm);

const mapStateToProps = state => ({
    user: state.system.user.data
});

export default connect(mapStateToProps)(ProfileDetailsForm)
