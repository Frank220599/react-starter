import React from 'react';
import ProgressiveImage from "react-progressive-image";
import {Link} from "react-router-dom";

const Ordinary = ({id, big, recommendation, title, cover, rating}) => {
    const component = (
        <div className={`card ${big ? "card--big" : ''}`}>
            <div className="card__cover">
                <ProgressiveImage
                    src={cover}
                    // placeholder={tinyImgPath}
                >
                    {(src, loading) => <img src={src} style={{
                        opacity: loading ? ".5" : "1",
                        filter: loading ? "blur(10px)" : "",
                        transition: ".1s"
                    }} alt=""/>}
                </ProgressiveImage>

                <Link to={`/movies/${id}`} className="card__play">
                    <i className="icon ion-ios-play"/>
                </Link>
            </div>
            <div className="card__content">
                <h3 className="card__title"><Link to={`/movies/${id}`} href="#">{title}</Link></h3>
                <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                </span>
                <span className="card__rate"><i className="icon ion-ios-star"/>{rating}</span>
            </div>
        </div>
    );

    if (big) {
        return component
    } else if (recommendation) {
        return (
            <div className="col-6 col-sm-4 col-lg-6">
                {component}
            </div>
        )
    } else {
        return (
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                {component}
            </div>
        )
    }

};

export default Ordinary;
