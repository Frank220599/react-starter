import React from 'react';

const TVSeriesDetails = () => {
    return (
        <>
            <section className="section details">
                <div className="details__bg section-bg"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="details__title">I Dream in Another Language</h1>
                        </div>
                        <div className="col-10">
                            <div className="card card--details card--series">
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                        <div className="card__cover">
                                            <img src="img\covers\cover.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                                        <div className="card__content">
                                            <div className="card__wrap">
                                                <span className="card__rate"><i
                                                    className="icon ion-ios-star"></i>8.4</span>

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
                                            <div className="card__description card__description--details">
                                                It is a long established fact that a reader will be distracted by
                                                the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution
                                                of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English. Many desktop publishing packages and web
                                                page editors now use Lorem Ipsum as their default model text, and a
                                                search for 'lorem ipsum' will uncover many web sites still in their
                                                infancy. Various versions have evolved over the years, sometimes by
                                                accident, sometimes on purpose (injected humour and the like).
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            {/*// TODO video*/}
                            {/*<video controls="" crossOrigin="" playsinline=""*/}
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

                            {/*    <track kind="captions" label="English" srcLang="en"*/}
                            {/*           src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"*/}
                            {/*           default="">*/}
                            {/*        <track kind="captions" label="Français" srcLang="fr"*/}
                            {/*               src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt">*/}

                            {/*            <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"*/}
                            {/*               download="">Download</a>*/}
                            {/*        </track>*/}
                            {/*    </track>*/}
                            {/*</video>*/}
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="accordion" id="accordion">
                                <div className="accordion__card">
                                    <div className="card-header" id="headingOne">
                                        <button type="button" data-toggle="collapse" data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                            <span>Season: 1</span>
                                            <span>22 Episodes from Nov, 2004 until May, 2005</span>
                                        </button>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            <table className="accordion__list">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Air Date</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Pilot</td>
                                                    <td>Tuesday, November 16th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Paternity</td>
                                                    <td>Tuesday, November 23rd, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Occam's Razor</td>
                                                    <td>Tuesday, November 30th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Maternity</td>
                                                    <td>Tuesday, December 7th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Damned If You Do</td>
                                                    <td>Tuesday, December 14th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>6</th>
                                                    <td>The Socratic Method</td>
                                                    <td>Tuesday, December 21st, 2004</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion__card">
                                    <div className="card-header" id="headingTwo">
                                        <button className="collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            <span>Season: 2</span>
                                            <span>24 Episodes from Sep, 2005 until May, 2006</span>
                                        </button>
                                    </div>

                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            <table className="accordion__list">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Air Date</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Pilot</td>
                                                    <td>Tuesday, November 16th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Paternity</td>
                                                    <td>Tuesday, November 23rd, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Occam's Razor</td>
                                                    <td>Tuesday, November 30th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Maternity</td>
                                                    <td>Tuesday, December 7th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Damned If You Do</td>
                                                    <td>Tuesday, December 14th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>6</th>
                                                    <td>The Socratic Method</td>
                                                    <td>Tuesday, December 21st, 2004</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion__card">
                                    <div className="card-header" id="headingThree">
                                        <button className="collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                            <span>Season: 3</span>
                                            <span>24 Episodes from Sep, 2006 until May, 2007</span>
                                        </button>
                                    </div>

                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            <table className="accordion__list">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Air Date</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Pilot</td>
                                                    <td>Tuesday, November 16th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Paternity</td>
                                                    <td>Tuesday, November 23rd, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Occam's Razor</td>
                                                    <td>Tuesday, November 30th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Maternity</td>
                                                    <td>Tuesday, December 7th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Damned If You Do</td>
                                                    <td>Tuesday, December 14th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>6</th>
                                                    <td>The Socratic Method</td>
                                                    <td>Tuesday, December 21st, 2004</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion__card">
                                    <div className="card-header" id="headingFour">
                                        <button className="collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                            <span>Season: 4</span>
                                            <span>16 Episodes from Sep, 2007 until May, 2008</span>
                                        </button>
                                    </div>

                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            <table className="accordion__list">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Air Date</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Pilot</td>
                                                    <td>Tuesday, November 16th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Paternity</td>
                                                    <td>Tuesday, November 23rd, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Occam's Razor</td>
                                                    <td>Tuesday, November 30th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Maternity</td>
                                                    <td>Tuesday, December 7th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Damned If You Do</td>
                                                    <td>Tuesday, December 14th, 2004</td>
                                                </tr>
                                                <tr>
                                                    <th>6</th>
                                                    <td>The Socratic Method</td>
                                                    <td>Tuesday, December 21st, 2004</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="details__wrap">
                                <div className="details__devices">
                                    <span className="details__devices-title">Available on devices:</span>
                                    <ul className="details__devices-list">
                                        <li><i className="icon ion-logo-apple"></i><span>IOS</span></li>
                                        <li><i className="icon ion-logo-android"></i><span>Android</span></li>
                                        <li><i className="icon ion-logo-windows"></i><span>Windows</span></li>
                                        <li><i className="icon ion-md-tv"></i><span>Smart TV</span></li>
                                    </ul>
                                </div>

                                <div className="details__share">
                                    <span className="details__share-title">Share with friends:</span>

                                    <ul className="details__share-list">
                                        <li className="facebook"><a href="#"><i
                                            className="icon ion-logo-facebook"></i></a>
                                        </li>
                                        <li className="instagram"><a href="#"><i
                                            className="icon ion-logo-instagram"></i></a>
                                        </li>
                                        <li className="twitter"><a href="#"><i
                                            className="icon ion-logo-twitter"></i></a></li>
                                        <li className="vk"><a href="#"><i className="icon ion-logo-vk"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="content__head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="content__title">Discover</h2>
                                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab"
                                           aria-controls="tab-1" aria-selected="true">Comments</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab"
                                           aria-controls="tab-2" aria-selected="false">Reviews</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab"
                                           aria-controls="tab-3" aria-selected="false">Photos</a>
                                    </li>
                                </ul>

                                <div className="content__mobile-tabs" id="content__mobile-tabs">
                                    <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation"
                                         id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true"
                                         aria-expanded="false">
                                        <input type="button" value="Comments"/>
                                        <span/>
                                    </div>

                                    <div className="content__mobile-tabs-menu dropdown-menu"
                                         aria-labelledby="mobile-tabs">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item"><a className="nav-link active" id="1-tab"
                                                                        data-toggle="tab"
                                                                        href="#tab-1" role="tab" aria-controls="tab-1"
                                                                        aria-selected="true">Comments</a></li>

                                            <li className="nav-item"><a className="nav-link" id="2-tab"
                                                                        data-toggle="tab"
                                                                        href="#tab-2" role="tab" aria-controls="tab-2"
                                                                        aria-selected="false">Reviews</a></li>

                                            <li className="nav-item"><a className="nav-link" id="3-tab"
                                                                        data-toggle="tab"
                                                                        href="#tab-3" role="tab" aria-controls="tab-3"
                                                                        aria-selected="false">Photos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-8">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel"
                                     aria-labelledby="1-tab">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="comments">
                                                <ul className="comments__list">
                                                    <li className="comments__item">
                                                        <div className="comments__autor">
                                                            <img className="comments__avatar" src="img\user.svg"
                                                                 alt=""/>
                                                            <span className="comments__name">John Doe</span>
                                                            <span
                                                                className="comments__time">30.08.2018, 17:53</span>
                                                        </div>
                                                        <p className="comments__text">There are many variations of
                                                            passages
                                                            of Lorem Ipsum available, but the majority have suffered
                                                            alteration in some form, by injected humour, or randomised
                                                            words which don't look even slightly believable. If you are
                                                            going to use a passage of Lorem Ipsum, you need to be sure
                                                            there isn't anything embarrassing hidden in the middle of
                                                            text.</p>
                                                        <div className="comments__actions">
                                                            <div className="comments__rate">
                                                                <button type="button"><i
                                                                    className="icon ion-md-thumbs-up"></i>12
                                                                </button>

                                                                <button type="button">7<i
                                                                    className="icon ion-md-thumbs-down"></i></button>
                                                            </div>

                                                            <button type="button"><i
                                                                className="icon ion-ios-share-alt"></i>Reply
                                                            </button>
                                                            <button type="button"><i className="icon ion-ios-quote"></i>Quote
                                                            </button>
                                                        </div>
                                                    </li>

                                                    <li className="comments__item comments__item--answer">
                                                        <div className="comments__autor">
                                                            <img className="comments__avatar" src="img\user.svg"
                                                                 alt=""/>
                                                            <span className="comments__name">John Doe</span>
                                                            <span
                                                                className="comments__time">24.08.2018, 16:41</span>
                                                        </div>
                                                        <p className="comments__text">Lorem Ipsum is simply dummy text
                                                            of
                                                            the printing and typesetting industry. Lorem Ipsum has been
                                                            the industry's standard dummy text ever since the 1500s,
                                                            when an unknown printer took a galley of type and scrambled
                                                            it to make a type specimen book.</p>
                                                        <div className="comments__actions">
                                                            <div className="comments__rate">
                                                                <button type="button"><i
                                                                    className="icon ion-md-thumbs-up"/>8
                                                                </button>
                                                                <button type="button">3<i
                                                                    className="icon ion-md-thumbs-down"/></button>
                                                            </div>

                                                            <button type="button"><i
                                                                className="icon ion-ios-share-alt"/>Reply
                                                            </button>
                                                            <button type="button"><i className="icon ion-ios-quote"/>Quote
                                                            </button>
                                                        </div>
                                                    </li>

                                                    <li className="comments__item comments__item--quote">
                                                        <div className="comments__autor">
                                                            <img className="comments__avatar" src="img\user.svg"
                                                                 alt=""/>
                                                            <span className="comments__name">John Doe</span>
                                                            <span
                                                                className="comments__time">11.08.2018, 11:11</span>
                                                        </div>
                                                        <p className="comments__text"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>It
                                                            has survived not only five centuries, but also the leap into
                                                            electronic typesetting, remaining essentially unchanged. It
                                                            was popularised in the 1960s with the release of Letraset
                                                            sheets containing Lorem Ipsum passages, and more recently
                                                            with desktop publishing software like Aldus PageMaker
                                                            including versions of Lorem Ipsum.</p>
                                                        <div className="comments__actions">
                                                            <div className="comments__rate">
                                                                <button type="button">
                                                                    <i className="icon ion-md-thumbs-up"/>11
                                                                </button>

                                                                <button type="button">1<i
                                                                    className="icon ion-md-thumbs-down"/></button>
                                                            </div>

                                                            <button type="button"><i
                                                                className="icon ion-ios-share-alt"/>Reply
                                                            </button>
                                                            <button type="button"><i className="icon ion-ios-quote"/>Quote
                                                            </button>
                                                        </div>
                                                    </li>

                                                    <li className="comments__item">
                                                        <div className="comments__autor">
                                                            <img className="comments__avatar" src="img\user.svg"
                                                                 alt=""/>
                                                            <span className="comments__name">John Doe</span>
                                                            <span
                                                                className="comments__time">07.08.2018, 14:33</span>
                                                        </div>
                                                        <p className="comments__text">There are many variations of
                                                            passages
                                                            of Lorem Ipsum available, but the majority have suffered
                                                            alteration in some form, by injected humour, or randomised
                                                            words which don't look even slightly believable. If you are
                                                            going to use a passage of Lorem Ipsum, you need to be sure
                                                            there isn't anything embarrassing hidden in the middle of
                                                            text.</p>
                                                        <div className="comments__actions">
                                                            <div className="comments__rate">
                                                                <button type="button"><i
                                                                    className="icon ion-md-thumbs-up"/>99
                                                                </button>

                                                                <button type="button">35<i
                                                                    className="icon ion-md-thumbs-down"/></button>
                                                            </div>

                                                            <button type="button"><i
                                                                className="icon ion-ios-share-alt"/>Reply
                                                            </button>
                                                            <button type="button"><i className="icon ion-ios-quote"/>Quote
                                                            </button>
                                                        </div>
                                                    </li>

                                                    <li className="comments__item">
                                                        <div className="comments__autor">
                                                            <img className="comments__avatar" src="img\user.svg"
                                                                 alt=""/>
                                                            <span className="comments__name">John Doe</span>
                                                            <span
                                                                className="comments__time">02.08.2018, 15:24</span>
                                                        </div>
                                                        <p className="comments__text">Many desktop publishing packages
                                                            and
                                                            web page editors now use Lorem Ipsum as their default model
                                                            text, and a search for 'lorem ipsum' will uncover many web
                                                            sites still in their infancy. Various versions have evolved
                                                            over the years, sometimes by accident, sometimes on purpose
                                                            (injected humour and the like).</p>
                                                        <div className="comments__actions">
                                                            <div className="comments__rate">
                                                                <button type="button"><i
                                                                    className="icon ion-md-thumbs-up"></i>74
                                                                </button>

                                                                <button type="button">13<i
                                                                    className="icon ion-md-thumbs-down"></i></button>
                                                            </div>

                                                            <button type="button"><i
                                                                className="icon ion-ios-share-alt"></i>Reply
                                                            </button>
                                                            <button type="button"><i className="icon ion-ios-quote"></i>Quote
                                                            </button>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <form action="#" className="form">
                                                    <textarea id="text" name="text" className="form__textarea"
                                                              placeholder="Add comment"></textarea>
                                                    <button type="button" className="form__btn">Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="reviews">
                                                <ul className="reviews__list">
                                                    <li className="reviews__item">
                                                        <div className="reviews__autor">
                                                            <img className="reviews__avatar" src="img\user.svg" alt=""/>
                                                            <span className="reviews__name">Best Marvel movie in my opinion</span>
                                                            <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                                                            <span className="reviews__rating"><i
                                                                className="icon ion-ios-star"></i>8.4</span>
                                                        </div>
                                                        <p className="reviews__text">There are many variations of
                                                            passages
                                                            of Lorem Ipsum available, but the majority have suffered
                                                            alteration in some form, by injected humour, or randomised
                                                            words which don't look even slightly believable. If you are
                                                            going to use a passage of Lorem Ipsum, you need to be sure
                                                            there isn't anything embarrassing hidden in the middle of
                                                            text.</p>
                                                    </li>

                                                    <li className="reviews__item">
                                                        <div className="reviews__autor">
                                                            <img className="reviews__avatar" src="img\user.svg" alt=""/>
                                                            <span className="reviews__name">Best Marvel movie in my opinion</span>
                                                            <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                                                            <span className="reviews__rating"><i
                                                                className="icon ion-ios-star"/>9.0</span>
                                                        </div>
                                                        <p className="reviews__text">There are many variations of
                                                            passages
                                                            of Lorem Ipsum available, but the majority have suffered
                                                            alteration in some form, by injected humour, or randomised
                                                            words which don't look even slightly believable. If you are
                                                            going to use a passage of Lorem Ipsum, you need to be sure
                                                            there isn't anything embarrassing hidden in the middle of
                                                            text.</p>
                                                    </li>

                                                    <li className="reviews__item">
                                                        <div className="reviews__autor">
                                                            <img className="reviews__avatar" src="img\user.svg" alt=""/>
                                                            <span className="reviews__name">Best Marvel movie in my opinion</span>
                                                            <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                                                            <span className="reviews__rating"><i
                                                                className="icon ion-ios-star"/>7.5</span>
                                                        </div>
                                                        <p className="reviews__text">There are many variations of
                                                            passages
                                                            of Lorem Ipsum available, but the majority have suffered
                                                            alteration in some form, by injected humour, or randomised
                                                            words which don't look even slightly believable. If you are
                                                            going to use a passage of Lorem Ipsum, you need to be sure
                                                            there isn't anything embarrassing hidden in the middle of
                                                            text.</p>
                                                    </li>
                                                </ul>

                                                <form action="#" className="form">
                                                    <input type="text" className="form__input" placeholder="Title"/>
                                                    <textarea className="form__textarea"
                                                              placeholder="Review"/>
                                                    <div className="form__slider">
                                                        <div className="form__slider-rating"
                                                             id="slider__rating"/>
                                                        <div className="form__slider-value"
                                                             id="form__slider-value"/>
                                                    </div>
                                                    <button type="button" className="form__btn">Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                                    <div className="gallery" itemScope="">
                                        <div className="row">
                                            <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia"
                                                    itemScope="">
                                                <a href="img\gallery\project-1.jpg" itemProp="contentUrl"
                                                   data-size="1920x1280">
                                                    <img src="img\gallery\project-1.jpg" itemProp="thumbnail" alt="
                                                   Image description"/>
                                                </a>
                                                <figcaption itemProp=" caption description">Some image caption 1
                                                </figcaption>
                                            </figure>

                                            <figure className=" col-12 col-sm-6 col-xl-4" itemProp="
                                                   associatedMedia" itemScope="">
                                                <a href=" img\gallery\project-2.jpg" itemProp="
                                                   contentUrl" data-size="1920x1280">
                                                    <img src=" img\gallery\project-2.jpg" itemProp=" thumbnail" alt="
                                                   Image description"/>
                                                </a>
                                                <figcaption itemProp=" caption description">Some image caption 2
                                                </figcaption>
                                            </figure>

                                            <figure className=" col-12 col-sm-6 col-xl-4" itemProp="
                                                   associatedMedia" itemScope="">
                                                <a href=" img\gallery\project-3.jpg" itemProp="
                                                   contentUrl" data-size="1920x1280">
                                                    <img src=" img\gallery\project-3.jpg" itemProp=" thumbnail" alt="
                                                   Image description"/>
                                                </a>
                                                <figcaption itemProp=" caption description">Some image caption 3
                                                </figcaption>
                                            </figure>

                                            <figure className=" col-12 col-sm-6 col-xl-4" itemProp="
                                                   associatedMedia" itemScope="">
                                                <a href=" img\gallery\project-4.jpg" itemProp="
                                                   contentUrl" data-size="1920x1280">
                                                    <img src=" img\gallery\project-4.jpg" itemProp=" thumbnail" alt="
                                                   Image description"/>
                                                </a>
                                                <figcaption itemProp=" caption description">Some image caption 4
                                                </figcaption>
                                            </figure>

                                            <figure className=" col-12 col-sm-6 col-xl-4" itemProp="
                                                   associatedMedia" itemScope="">
                                                <a href=" img\gallery\project-5.jpg" itemProp="
                                                   contentUrl" data-size="1920x1280">
                                                    <img src=" img\gallery\project-5.jpg" itemProp=" thumbnail" alt="
                                                   Image description"/>
                                                </a>
                                                <figcaption itemProp=" caption description">Some image caption 5
                                                </figcaption>
                                            </figure>

                                            <figure className=" col-12 col-sm-6 col-xl-4" itemProp="
                                                   associatedMedia" itemScope="">
                                                <a href=" img\gallery\project-6.jpg" itemProp="
                                                   contentUrl" data-size="1920x1280">
                                                    <img src=" img\gallery\project-6.jpg" itemProp=" thumbnail" alt="
                                                   Image description"/>
                                                </a>
                                                <figcaption itemProp=" caption description">Some image caption 6
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" col-12 col-lg-4 col-xl-4">
                            <div className=" row">
                                <div className=" col-12">
                                    <h2 className=" section__title section__title--sidebar">You may also like...</h2>
                                </div>

                                <div className=" col-6 col-sm-4 col-lg-6">
                                    <div className=" card">
                                        <div className=" card__cover">
                                            <img src=" img\covers\cover.jpg" alt=""/>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                            <span className="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
                                            <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-6">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img\covers\cover2.jpg" alt=""/>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">Benched</a></h3>
                                            <span className="card__category">
										<a href="#">Comedy</a>
									</span>
                                            <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-6">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img\covers\cover3.jpg" alt=""/>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">Whitney</a></h3>
                                            <span className="card__category">
										<a href="#">Romance</a>
										<a href="#">Drama</a>
										<a href="#">Music</a>
									</span>
                                            <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-6">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img\covers\cover4.jpg" alt=""/>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">Blindspotting</a></h3>
                                            <span className="card__category">
										<a href="#">Comedy</a>
										<a href="#">Drama</a>
									</span>
                                            <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-6">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img\covers\cover5.jpg" alt=""/>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                            <span className="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
                                            <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-6">
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src="img\covers\cover6.jpg" alt=""/>
                                            <a href="#" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="#">Benched</a></h3>
                                            <span className="card__category">
										<a href="#">Comedy</a>
									</span>
                                            <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TVSeriesDetails;