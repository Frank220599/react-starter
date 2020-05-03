import React from 'react';

const Contacts = () => {
    return (
        <>
            <section className="section section--first section--bg section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__wrap">
                                <h2 className="section__title">Contacts</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="#">Home</a></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">Contacts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section__title">Contact Form</h2>
                                </div>

                                <div className="col-12">
                                    <form action="#" className="form form--contacts">
                                        <input type="text" className="form__input" placeholder="Your Name"/>
                                        <input type="text" className="form__input" placeholder="Email"/>
                                        <input type="text" className="form__input" placeholder="Subject"/>
                                        <textarea id="text" name="text" className="form__textarea"
                                                  placeholder="Type your message..."/>
                                        <button type="button" className="form__btn">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section__title">Info</h2>
                                </div>
                                <div className="col-12">
                                    <p className="section__text">It is a long fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout. The point of using
                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                        opposed to using.</p>

                                    <ul className="contacts__list">
                                        <li><a href="tel:+18002345678">+1 (800) 234-5678</a></li>
                                        <li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
                                    </ul>
                                    <ul className="contacts__social">
                                        <li className="facebook"><a href="#"><i className="icon ion-logo-facebook"/></a>
                                        </li>
                                        <li className="instagram"><a href="#">
                                            <i className="icon ion-logo-instagram"/></a></li>
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
        </>
    );
};

export default Contacts;