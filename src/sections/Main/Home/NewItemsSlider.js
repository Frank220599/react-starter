import React, {useEffect, useState} from 'react';
import 'swiper/css/swiper.css'
import Swiper from "react-id-swiper";
import {MovieItem} from "../../../components/Main/MovieItem";
import {EntityContainer} from "../../../base/EntityContainer";

const NewItemsSlider = () => {
        const [swiper, updateSwiper] = useState(null);
        const goNext = () => {
            if (swiper !== null) {
                swiper.slideNext();
            }
        };
        const goPrev = () => {
            if (swiper !== null) {
                swiper.slidePrev();
            }
        };
        const params = {
            slidesPerView: 4,
            speed: 600,
            spaceBetween: 30,
            loop: true,
            grabCursor: false,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 50
                }
            },
            // rebuildOnUpdate: true,
            shouldSwiperUpdate: true,
        }
        return (
            <section className="home">
                <div className="owl-carousel home__bg">
                    <div className="item home__cover" data-bg="img/home/home__bg.jpg"/>
                    <div className="item home__cover" data-bg="img/home/home__bg2.jpg"/>
                    <div className="item home__cover" data-bg="img/home/home__bg3.jpg"/>
                    <div className="item home__cover" data-bg="img/home/home__bg4.jpg"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>
                            <button className="home__nav home__nav--prev" onClick={goPrev}>
                                <i className="icon ion-ios-arrow-round-back"/>
                            </button>
                            <button className="home__nav home__nav--next" onClick={goNext}>
                                <i className="icon ion-ios-arrow-round-forward"/>
                            </button>
                        </div>
                        <div className="col-12">
                            <div className={"home__carousel"}>
                                <EntityContainer.All entity={'movies'} name={'MovieSlider'} url={'/movies'}>
                                    {({items, isFetched}) => (
                                        <Swiper {...params} getSwiper={updateSwiper}>
                                            {items.map((movie, index) => {
                                                return (
                                                    <div className="item" key={movie.id}>
                                                        <MovieItem.Ordinary
                                                            id={movie.id}
                                                            big={true}
                                                            title={movie.title}
                                                            cover={movie.cover}
                                                            rating={movie.rating}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </Swiper>
                                    )}
                                </EntityContainer.All>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
;

export default NewItemsSlider;
