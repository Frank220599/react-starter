import React from 'react';
import {Field, Form, withFormik, ErrorMessage} from "formik";
import * as Yup from "yup";
import Select from "react-select"
import {EntityContainer} from "../base/EntityContainer";

const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: '100%',
        backgroundColor: '#2b2b31',
        zIndex: 999
    }),
    container: () => ({
        height: 50,
        backgroundColor: '#2b2b31',
        display: 'flex',
        alignItems: 'center'
    }),
    control: () => ({
        width: "100%"
    }),
    option: (provided, state) => ({
        width: '100%',
        textTransform: 'uppercase',
        lineHeight: '40px',
        fontWeight: 300,
        color: state.isSelected ? '#ff55a5' : 'rgba(255,255,255,0.75)',
        paddingLeft: 20,
        paddingRight: 20,
        cursor: 'pointer'

    }),
    indicatorsContainer: () => ({
        display: 'none'
    }),
    singleValue: (provided, state) => {
        const color = '#fff';
        const transition = 'opacity 300ms';

        return {...provided, color, transition,};
    }
}

let AddMovieForm = ({setFieldValue}) => {
    return (
        <Form className="form" style={{padding: 30}}>
            <div className="row">
                <div className="col-12 col-md-4 form__cover">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-12">
                            <div className="form__img">
                                <label for="cover">Upload cover (270 x 400)</label>
                                <Field
                                    id="cover"
                                    name="cover"
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                />
                                <img id="form__img" src="#" alt=" "/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-8 form__content">
                    <div className="row">
                        <div className="col-12">
                            <ErrorMessage name={'title'} className={'validation-error'} component={'div'}/>
                            <Field
                                type="text"
                                className="form__input"
                                placeholder="Title"
                                name='title'
                            />
                        </div>

                        <div className="col-12">
                            <ErrorMessage name={'description'} className={'validation-error'} component={'div'}/>
                            <Field
                                id="text"
                                component='textarea'
                                style={{height: 120}}
                                name="description"
                                className="form__textarea"
                                placeholder="Description"
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <ErrorMessage name={'releaseYear'} className={'validation-error'} component={'div'}/>
                            <Field
                                type="text"
                                className="form__input"
                                placeholder="Release year"
                                name='releaseYear'
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <ErrorMessage name={'duration'} className={'validation-error'} component={'div'}/>
                            <Field
                                type="text"
                                className="form__input"
                                placeholder="Running timed in minutes"
                                name='duration'
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <ErrorMessage name={'qualityId'} className={'validation-error'} component={'div'}/>
                            <EntityContainer.All
                                entity={"qualities"}
                                name={"All"}
                                url={"/qualities"}
                            >
                                {({items, isFetched}) => (
                                    <div style={{marginBottom: 20}}>
                                        <Select
                                            styles={customStyles}
                                            placeholder={'Choose qu...'}
                                            onChange={(value) => setFieldValue('qualityId', value.value)}
                                            options={items.map(item => ({
                                                value: item.id,
                                                label: item.name
                                            }))}
                                        />
                                    </div>
                                )}
                            </EntityContainer.All>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <Field
                                type="text"
                                className="form__input"
                                placeholder="Age"
                                name='age'
                            />
                        </div>

                        <div className="col-12 col-lg-6">
                            <EntityContainer.All
                                entity={"countries"}
                                name={"All"}
                                url={"/defaults/countries"}
                            >
                                {({items, isFetched}) => (
                                    <div style={{marginBottom: 20}}>
                                        <Select
                                            styles={customStyles}
                                            placeholder={'Choose country / countries'}
                                            onChange={(value) => setFieldValue('country', value.value)}
                                            options={items.map(item => ({
                                                value: item.name,
                                                label: item.name
                                            }))}
                                        />
                                    </div>
                                )}
                            </EntityContainer.All>
                        </div>

                        <div className="col-12 col-lg-6">
                            <EntityContainer.All
                                entity={"genres"}
                                name={"All"}
                                url={"/genres"}
                                params={{sort: 'id'}}
                            >
                                {({items, isFetched}) => (
                                    <Select
                                        isMulti
                                        styles={customStyles}
                                        placeholder={'Choose genre / genres'}
                                        onChange={(value) => setFieldValue('genres', value)}
                                        options={items.map(item => ({
                                            value: item.id,
                                            label: item.name
                                        }))}
                                    />
                                )}
                            </EntityContainer.All>
                        </div>

                        <div className="col-12">
                            <div className="form__gallery">
                                <label id="gallery1" for="form__gallery-upload">Upload photos</label>
                                <Field
                                    id="form__gallery-upload"
                                    name="gallery"
                                    className="form__gallery-upload"
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    multiple=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <ul className="form__radio">
                        <li>
                            <span>Item type:</span>
                        </li>
                        <li>
                            <input id="type1" type="radio" name="type" data-toggle="collapse"
                                   data-target=".multi-collapse" checked=""/>
                            <label for="type1">Movie</label>
                        </li>
                        <li>
                            <input id="type2" type="radio" name="type" data-toggle="collapse"
                                   data-target=".multi-collapse"/>
                            <label for="type2">TV Series</label>
                        </li>
                    </ul>
                </div>

                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="collapse show multi-collapse" id="multiCollapseExample1">
                                <div className="form__video">
                                    <label id="movie1" for="form__video-upload">Upload video</label>
                                    <input data-name="#movie1" id="form__video-upload" name="movie"
                                           className="form__video-upload" type="file"
                                           accept="video/mp4,video/x-m4v,video/*"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="form__season">
                                    <div className="form__season-title">
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="form__title">Season #1</span>
                                            </div>

                                            <div className="col-12 col-sm-6 col-md-5 col-xl-6">
                                                <input type="text" className="form__input"
                                                       placeholder="Season title"/>
                                            </div>

                                            <div className="col-12 col-sm-6 col-md-4 col-xl-4">
                                                <input type="text" className="form__input"
                                                       placeholder="Season info"/>
                                            </div>

                                            <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                                                <button className="form__btn form__btn--add">add season</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form__episode">
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="form__title">Episode #1</span>
                                                <button className="form__delete" type="button">
                                                    <i className="icon ion-ios-close"></i>
                                                </button>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <input type="text" className="form__input"
                                                       placeholder="Episode title 1"/>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <input type="text" className="form__input"
                                                       placeholder="Air date"/>
                                            </div>

                                            <div className="col-12">
                                                <div className="form__video">
                                                    <label id="s1s1" for="form__video-upload1">Upload episode
                                                        1</label>
                                                    <input data-name="#s1s1" id="form__video-upload1"
                                                           name="s1s1" className="form__video-upload"
                                                           type="file"
                                                           accept="video/mp4,video/x-m4v,video/*"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form__episode">
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="form__title">Episode #2</span>
                                                <button className="form__delete" type="button">
                                                    <i className="icon ion-ios-close"/>
                                                </button>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <input type="text" className="form__input"
                                                       placeholder="Episode title 2"/>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <input type="text" className="form__input"
                                                       placeholder="Air date"/>
                                            </div>

                                            <div className="col-12 col-sm-8 col-md-9 col-xl-10">
                                                <div className="form__video">
                                                    <label id="s1s2" for="form__video-upload2">Upload episode
                                                        2</label>
                                                    <input data-name="#s1s2" id="form__video-upload2"
                                                           name="s1s2" className="form__video-upload"
                                                           type="file"
                                                           accept="video/mp4,video/x-m4v,video/*"/>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                                                <button className="form__btn form__btn--add">add episode
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="form__btn">publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};

AddMovieForm = withFormik({
    validationSchema: () => Yup.object().shape({
        // title: Yup.string().min(6).required('Required'),
        // description: Yup.string().min(6).required('Required'),
        // releaseYear: Yup.number().required('Required'),
        // age: Yup.number().required('Required'),
        // duration: Yup.number().required('Required'),
        // genres: Yup.array().required('Required'),
        // coutry: Yup.array().required('Required'),
        // qualityId: Yup.number().required('Required'),
    }),
    mapPropsToValues: (props) => {
        return ({
            title: '',
            description: '',
            releaseYear: '',
            age: '',
            duration: '',
            qualityId: '',
            genres: [],
            country: [],
        })
    },
    handleSubmit: (values, {props: {dispatch, user, history}, setSubmitting, resetForm}) => {
        console.log(values)
        let formData = new FormData();
        Object.keys(values).forEach(key => {
            if (values[key] instanceof Array) {
                values[key].forEach(i => {
                    formData.append(`${key}[]`, i);
                });
            } else {
                formData.append(key, values[key]);
            }
        });
    }
})(AddMovieForm);


export default AddMovieForm;
