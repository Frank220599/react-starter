import React, {useState} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import {connect} from "react-redux";
import wNumb from 'wnumb'
import {Formik, Form as FormikForm, Field} from "formik";
import {bindActionCreators} from "redux";

import {ReviewCreate} from "../../../store/actions/system";


const Form = ({user, id, ReviewCreate}) => {
    const [rating, setRating] = useState(8.6);
    return (
        <Formik
            initialValues={{text: '', title: '', rating}}

            onSubmit={(values, {resetForm}) => {
                console.log(values);
                ReviewCreate({
                    title: values.title,
                    movieId: id,
                    text: values.text,
                    rating,
                });

                resetForm({})
            }}
        >
            {() => (
                <FormikForm className="form">
                    <Field
                        type="text"
                        name="title"
                        className="form__input"
                        placeholder="Title"
                    />
                    <Field
                        component='textarea'
                        name='text'
                        className="form__textarea"
                        placeholder="Review"
                    />
                    <div className="form__slider">
                        <div className="form__slider-rating"
                             id="slider__rating">
                            <Nouislider
                                range={{min: 0.0, max: 10.0}}
                                start={8.6}
                                onSlide={value => {
                                    setRating(value[0])
                                }}
                                connect={[true, false]}
                                format={wNumb({
                                    decimals: 1
                                })}
                            />
                        </div>
                        <div className="form__slider-value"
                             id="form__slider-value">
                            {rating}
                        </div>
                    </div>
                    {
                        user.isAuthenticated
                            ? <button type="submit" className="form__btn">Send</button>
                            : <button type="button" className="form__btn" disabled>sign in to leave review</button>
                    }
                </FormikForm>
            )}
        </Formik>
    );
};

const mapStateToProps = state => ({
    user: state.system.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    ReviewCreate
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
