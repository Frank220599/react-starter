import React, {useState} from 'react';
import classnames from "classnames"
import MovieDetailsTab from "../../sections/Main/MovieDetails/MovieDetailsTab";
import CommentsTabContent from "../../sections/Main/MovieDetails/CommentsTabContent";
import ReviewsTabContent from "../../sections/Main/MovieDetails/ReviewsTabContent";
import GalleryTabContent from "../../sections/Main/MovieDetails/GalleryTabContent";
import {EntityContainer} from "../../base/EntityContainer";


const MovieDetails = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <EntityContainer.One entity={'movies'} name={'movie'} url={'/movies/1'}>
                {({})=> {
                    return <h1>sdf</h1>
                }}
            </EntityContainer.One>
            <section className="section details">
                <div className="details__bg"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="details__title">I Dream in Another Language</h1>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="card card--details">
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                                        <div className="card__cover">
                                            <img src={require("../../assets/images/covers/cover.jpg")} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                                        <div className="card__content">
                                            <div className="card__wrap">
                                                <span className="card__rate">
                                                    <i className="icon ion-ios-star"/>8.4</span>
                                                <ul className="card__list">
                                                    <li>HD</li>
                                                    <li>16+</li>
                                                </ul>
                                            </div>
                                            <ul className="card__meta">
                                                <li><span>Genre:</span> <a href="#">Action</a>
                                                    <a href="#">Triler</a></li>
                                                <li><span>Release year:</span> 2017</li>
                                                <li><span>Running time:</span> 120 min</li>
                                                <li><span>Country:</span> <a href="#">USA</a></li>
                                            </ul>
                                            <div className="movie-desc">
                                                <div className={classnames(["card__description card__description--details more-text ",{show: showMore}])}>
                                                    It is a long established fact that a reader will be distracted by
                                                    the
                                                    readable content of a page when looking at its layout. The point of
                                                    using Lorem Ipsum is that it has a more-or-less normal distribution
                                                    of
                                                    letters, as opposed to using 'Content here, content here', making it
                                                    look like readable English. Many desktop publishing packages and web
                                                    page editors now use Lorem Ipsum as their default model text, and a
                                                    search for 'lorem ipsum' will uncover many web sites still in their
                                                    infancy.
                                                </div>
                                                <div
                                                    onClick={() => setShowMore(!showMore)}
                                                    className="b-description_readmore_button"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            {/*// TODO video*/}
                            {/*<video controls="" crossorigin="" playsinline=""*/}
                            {/*       poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"*/}
                            {/*       id="player">*/}
                            {/*    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"*/}
                            {/*            type="video/mp4" size="576"/>*/}
                            {/*    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"*/}
                            {/*            type="video/mp4" size="720"/>*/}
                            {/*    <source*/}
                            {/*        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"*/}
                            {/*        type="video/mp4" size="1080"/>*/}
                            {/*    <source*/}
                            {/*        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4"*/}
                            {/*        type="video/mp4" size="1440"/>*/}

                            {/*    <track kind="captions" label="English" srclang="en"*/}
                            {/*           src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"*/}
                            {/*           default="">*/}
                            {/*        <track kind="captions" label="Français" srclang="fr"*/}
                            {/*               src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt">*/}
                            {/*            <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"*/}
                            {/*               download="">Download</a>*/}
                            {/*        </track>*/}
                            {/*    </track>*/}
                            {/*</video>*/}
                        </div>
                        <div className="col-12">
                            <div className="details__wrap">
                                <div className="details__devices">
                                    <span className="details__devices-title">Available on devices:</span>
                                    <ul className="details__devices-list">
                                        <li><i className="icon ion-logo-apple"/><span>IOS</span></li>
                                        <li><i className="icon ion-logo-android"/><span>Android</span></li>
                                        <li><i className="icon ion-logo-windows"/><span>Windows</span></li>
                                        <li><i className="icon ion-md-tv"/><span>Smart TV</span></li>
                                    </ul>
                                </div>

                                <div className="details__share">
                                    <span className="details__share-title">Share with friends:</span>

                                    <ul className="details__share-list">
                                        <li className="facebook"><a href="#"><i className="icon ion-logo-facebook"/></a>
                                        </li>
                                        <li className="instagram"><a href="#"><i
                                            className="icon ion-logo-instagram"/></a></li>
                                        <li className="twitter"><a href="#"><i
                                            className="icon ion-logo-twitter"/></a></li>
                                        <li className="vk"><a href="#"><i className="icon ion-logo-vk"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MovieDetailsTab>
                <CommentsTabContent/>
                <ReviewsTabContent/>
                <GalleryTabContent/>
            </MovieDetailsTab>
        </>
    );
};

export default MovieDetails;
