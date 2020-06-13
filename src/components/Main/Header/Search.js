import React from 'react';
import {Form, Formik, Field} from "formik";
import cx from "classnames"
import {withRouter} from "react-router";
import qs from "query-string";

const Search = ({isOpen, history, setIsOpen}) => {
    return (
        <Formik
            initialValues={{search: ''}}
            validate={values => {
                const errors = {};
                if (!values.search) {
                    errors.email = 'Required';
                }
                return errors;
            }}
            onSubmit={(values) => {
                const search = {search: values.search};
                setIsOpen(false)
                history.push({
                    pathname: '/search',
                    search: qs.stringify(search)
                })
            }}
        >
            {() => (
                <Form className={cx(["header__search", {' header__search--active': isOpen}])}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header__search-content">
                                    <Field type="text" name={'search'}
                                           placeholder="Search for a movie, TV Series that you are looking for"/>
                                    <button type="submit">search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default withRouter(Search);
