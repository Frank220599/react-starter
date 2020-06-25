import React from 'react';
import {Formik, Form as FormikForm, Field} from "formik";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {CommentCreate} from "../../../store/actions/system";

const Form = ({user, id, CommentCreate}) => {
    return (
        <Formik
            initialValues={{text: ''}}
            validate={values => {
                const errors = {};
                if (!values.text) {
                    errors.text = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {resetForm}) => {
                CommentCreate({
                    movieId: id,
                    text: values.text,
                });

                resetForm({})
            }}
        >
            {() => (
                <FormikForm className="form">
                    <Field
                        component={'textarea'}
                        name="text"
                        className="form__textarea"
                        placeholder="Add comment"
                    />
                    {
                        user.isAuthenticated
                            ? <button type="submit" className="form__btn">Send</button>
                            : <button type="button" className="form__btn" disabled>sign in to leave comment</button>
                    }
                </FormikForm>
            )
            }
        </Formik>
    );
};

const mapStateToProps = state => ({
    user: state.system.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    CommentCreate
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
