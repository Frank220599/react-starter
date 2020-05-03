import React from 'react';
import Breadcrumb from "../../components/Main/Breadcrumb";
import OurPartners from "../../sections/Main/Home/OurPartners";

const Pricing = () => {
    return (
        <>
            <Breadcrumb pageName={'Pricing'}/>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="row plan-features">
                                <li className="col-12 col-md-6 col-lg-4">1 month unlimited access!</li>
                                <li className="col-12 col-md-6 col-lg-4">Stream on your phone, laptop, tablet or TV.
                                </li>
                                <li className="col-12 col-md-6 col-lg-4">1 month unlimited access!</li>
                                <li className="col-12 col-md-6 col-lg-4">Thousands of TV shows, movies & more.</li>
                                <li className="col-12 col-md-6 col-lg-4">You can even Download & watch offline.</li>
                                <li className="col-12 col-md-6 col-lg-4">Thousands of TV shows, movies & more.</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="price">
                                <div className="price__item price__item--first"><span>Basic</span> <span>Free</span>
                                </div>
                                <div className="price__item"><span>7 days</span></div>
                                <div className="price__item"><span>720p Resolution</span></div>
                                <div className="price__item"><span>Limited Availability</span></div>
                                <div className="price__item"><span>Desktop Only</span></div>
                                <div className="price__item"><span>Limited Support</span></div>
                                <a href="#" className="price__btn">Choose Plan</a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="price price--premium">
                                <div className="price__item price__item--first"><span>Premium</span> <span>$19.99</span>
                                </div>
                                <div className="price__item"><span>1 Month</span></div>
                                <div className="price__item"><span>Full HD</span></div>
                                <div className="price__item"><span>Lifetime Availability</span></div>
                                <div className="price__item"><span>TV & Desktop</span></div>
                                <div className="price__item"><span>24/7 Support</span></div>
                                <a href="#" className="price__btn">Choose Plan</a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="price">
                                <div className="price__item price__item--first"><span>Cinematic</span>
                                    <span>$39.99</span>
                                </div>
                                <div className="price__item"><span>2 Months</span></div>
                                <div className="price__item"><span>Ultra HD</span></div>
                                <div className="price__item"><span>Lifetime Availability</span></div>
                                <div className="price__item"><span>Any Device</span></div>
                                <div className="price__item"><span>24/7 Support</span></div>
                                <a href="#" className="price__btn">Choose Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section section--dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section__title section__title--no-margin">Our Features</h2>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-tv feature__icon"></i>
                                <h3 className="feature__title">Ultra HD</h3>
                                <p className="feature__text">If you are going to use a passage of Lorem Ipsum, you need
                                    to
                                    be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-film feature__icon"></i>
                                <h3 className="feature__title">Film</h3>
                                <p className="feature__text">All the Lorem Ipsum generators on the Internet tend to
                                    repeat
                                    predefined chunks as necessary, making this the first.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-trophy feature__icon"></i>
                                <h3 className="feature__title">Awards</h3>
                                <p className="feature__text">It to make a type specimen book. It has survived not only
                                    five
                                    centuries, but also the leap into electronic typesetting, remaining.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-notifications feature__icon"></i>
                                <h3 className="feature__title">Notifications</h3>
                                <p className="feature__text">Various versions have evolved over the years, sometimes by
                                    accident, sometimes on purpose.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-rocket feature__icon"></i>
                                <h3 className="feature__title">Rocket</h3>
                                <p className="feature__text">It to make a type specimen book. It has survived not only
                                    five
                                    centuries, but also the leap into electronic typesetting.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="feature">
                                <i className="icon ion-ios-globe feature__icon"></i>
                                <h3 className="feature__title">Multi Language Subtitles </h3>
                                <p className="feature__text">Various versions have evolved over the years, sometimes by
                                    accident, sometimes on purpose.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <OurPartners/>
        </>
    );
};

export default Pricing;