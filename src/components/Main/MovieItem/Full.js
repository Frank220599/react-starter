import React from 'react';
import {Link} from "react-router-dom";

const Full = ({id}) => {
    return (
        <div className="col-6 col-sm-12 col-lg-6">
            <div className="card card--list">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="card__cover">
                            <img src={require("../../../assets/images/covers/cover.jpg")} alt=""/>
                            <Link to={'/movies/1'} href="#" className="card__play">
                                <i className="icon ion-ios-play"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className="card__content">
                            <h3 className="card__title">
                                <Link to={'/movies/1'} href="#">I Dream in Another Language</Link>
                            </h3>
                            <span className="card__category">
                                <a href="#">Action</a>
                                <a href="#">Triler</a>
                            </span>
                            <div className="card__wrap">
                                <span className="card__rate"><i className="icon ion-ios-star"/>8.4</span>

                                <ul className="card__list">
                                    <li>HD</li>
                                    <li>16+</li>
                                </ul>
                            </div>

                            <div className="card__description">
                                <p>It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here,
                                    content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Full;