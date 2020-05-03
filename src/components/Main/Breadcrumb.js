import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumb = ({pageName, linkName}) => {
    return (
        <section className="section section--first section--bg  section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section__wrap">
                            <h2 className="section__title">{pageName}</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb__item"><Link to={'/'}>Home</Link></li>
                                <li className="breadcrumb__item breadcrumb__item--active">{!linkName ? pageName : linkName}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;