import React from 'react';
import {Form, withFormik} from "formik";
import {InputField} from "./ProfileDetailsForm";
import * as Yup from "yup";
import {ChangePassword} from "../store/actions/system";
import {connect} from "react-redux";

let ChangePasswordForm = () => {
    return (
        <Form className="profile__form">
            <div className="row">
                <div className="col-12">
                    <h4 className="profile__title">Change password</h4>
                </div>
                <InputField
                    name={'oldPassword'}
                    label={'Old Password'}
                    type={'password'}
                />
                <InputField
                    name={'newPassword'}
                    label={'New Password'}
                    type={'password'}
                />
                <InputField
                    name={'confirmpass'}
                    label={'Confirm New Password'}
                    type={'password'}
                />
                <div className="col-12">
                    <button className="profile__btn" type="submit">Change</button>
                </div>
            </div>
        </Form>
    );
};

ChangePasswordForm = withFormik({
    enableReinitialize: true,
    validationSchema: () => Yup.object().shape({
        oldPassword: Yup.string()
            .required('Required'),
        newPassword: Yup.string()
            .required('Required')
            .min(6),
        confirmpass: Yup.string()
            .required('Required')
            .min(6)
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
    }),
    mapPropsToValues: (props) => {
        return ({
            oldPassword: '',
            newPassword: '',
            confirmpass: ''
        })
    },
    handleSubmit: (values, {props: {dispatch, user, history}, setSubmitting, resetForm}) => {
        console.log(values)
        dispatch(
            ChangePassword(values, () => {
                setSubmitting(false);
                resetForm(true)
            })
        )
    }
})(ChangePasswordForm);

const mapStateToProps = state => ({
    user: state.system.user.data
});

export default connect(mapStateToProps)(ChangePasswordForm)
