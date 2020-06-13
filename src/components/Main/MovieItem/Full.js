import React from 'react';
import {Link} from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

const Full = ({id, cover, title,description,rating, age}) => {
    return (
        <div className="col-6 col-sm-12 col-lg-6">
            <div className="card card--list">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="card__cover">
                            <ProgressiveImage
                                src={cover}
                                // placeholder={tinyImgPath}
                            >
                                {(src, loading) => <img src={src} style={{
                                    opacity: loading ? ".5" : "1",
                                    filter: loading ? "blur(10px)" : "",
                                    transition: ".1s"
                                }} alt="" />}
                            </ProgressiveImage>
                            <Link to={`/movies/${id}`} href="#" className="card__play">
                                <i className="icon ion-ios-play"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className="card__content">
                            <h3 className="card__title">
                                <Link to={`/movies/${id}`} href="#">{title}</Link>
                            </h3>
                            <span className="card__category">
                                <a href="#">Action</a>
                                <a href="#">Triler</a>
                            </span>
                            <div className="card__wrap">
                                <span className="card__rate"><i className="icon ion-ios-star"/>{rating}</span>

                                <ul className="card__list">
                                    <li>HD</li>
                                    <li>{age}+</li>
                                </ul>
                            </div>

                            <div className="card__description">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Full;
