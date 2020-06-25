import React, {useEffect, useState} from 'react';
import cx from "classnames";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import wNumb from 'wnumb'
import {EntityContainer} from "../../../base/EntityContainer";
import qs from "query-string";
import {withRouter} from "react-router";

const Filter = (props) => {

    const [isOpen, setIsOpen] = useState({});
    const [genre, setGenre] = useState();
    const [quality, setQuality] = useState();
    const [year, setYear] = useState({from: 2005, to: 2015});
    const [rating, setRating] = useState({from: 2.5, to: 8.6});
    const dropdownHandler = index => {
        setIsOpen({[index]: !isOpen[index]});
    };
    const applyFilters = () => {
        const {history, location} = props;
        const query = qs.parse(location.search);
        const search = {
            ...query,
            year: [year.from, year.to],
            rating: [rating.from, rating.to],
            genre: genre.id,
            quality: quality.id
        };

        history.push({
            search: qs.stringify(search)
        });
    };

    const resetFilters = () => {
        props.history.push({search: null})
    }
    return (
        <div className="filter">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="filter__content">
                            <div className="filter__items">
                                <div className={cx(["filter__item ", {show: isOpen[1]}])} id="filter__genre">
                                    <span className="filter__item-label">GENRE:</span>
                                    <div
                                        style={{width: 120}}
                                        className="filter__item-btn"
                                        onClick={() => dropdownHandler(1)}
                                    >
                                        <input type="button" value={genre ? genre.name : 'Select genre'}/>
                                        <span/>
                                    </div>
                                    <ul className="filter__item-menu">
                                        <EntityContainer.All
                                            entity={'genres'}
                                            name={'All'}
                                            url={'/genres'}
                                            params={{sort: 'id'}}
                                        >
                                            {({items, isFetched}) => (
                                                <>
                                                    {
                                                        isFetched && items.map((genre, index) => {
                                                            return (
                                                                <li
                                                                    key={genre.id}
                                                                    onClick={() => setGenre(genre)}
                                                                >
                                                                    {genre.name}
                                                                </li>
                                                            )

                                                        })
                                                    }
                                                </>
                                            )}
                                        </EntityContainer.All>
                                    </ul>
                                </div>

                                <div className={cx(["filter__item ", {show: isOpen[2]}])} id="filter__quality">
                                    <span className="filter__item-label">QUALITY:</span>
                                    <div style={{width: 120}}
                                         className="filter__item-btn"
                                         onClick={() => dropdownHandler(2)}
                                    >
                                        <input type="button" value={quality ? quality.name : 'Select quality'}/>
                                        <span/>
                                    </div>
                                    <ul className="filter__item-menu dropdown-menu scrollbar-dropdown">
                                        <EntityContainer.All
                                            entity={'qualities'}
                                            name={'All'}
                                            url={'/qualities'}
                                            params={{sort: 'id'}}
                                        >
                                            {({items, isFetched}) => (
                                                <>
                                                    {
                                                        isFetched && items.map((quality, index) => {
                                                            return (
                                                                <li
                                                                    key={quality.id}
                                                                    onClick={() => setQuality(quality)}
                                                                >
                                                                    {quality.name}
                                                                </li>
                                                            )

                                                        })
                                                    }
                                                </>
                                            )}
                                        </EntityContainer.All>
                                    </ul>
                                </div>

                                <div className={cx(["filter__item ", {show: isOpen[3]}])}>
                                    <span className="filter__item-label">IMBd:</span>

                                    <div className="filter__item-btn" onClick={() => dropdownHandler(3)}>
                                        <div className="filter__range">
                                            <div id="filter__imbd-start">
                                                {rating.from}
                                            </div>
                                            <div id="filter__imbd-end">
                                                {rating.to}
                                            </div>
                                        </div>
                                        <span/>
                                    </div>

                                    <div className="filter__item-menu">
                                        <Nouislider
                                            range={{min: 0.0, max: 10.0}}
                                            start={[2.5, 8.6]}
                                            connect
                                            onSlide={values => {
                                                setRating({
                                                    from: values[0],
                                                    to: values[1]
                                                })
                                            }}
                                            format={wNumb({
                                                decimals: 1
                                            })}
                                        />
                                    </div>
                                </div>

                                <div className={cx(["filter__item ", {show: isOpen[4]}])} id="filter__year">
                                    <span className="filter__item-label">RELEASE YEAR:</span>
                                    <div className="filter__item-btn" onClick={() => dropdownHandler(4)}>
                                        <div className="filter__range">
                                            <div id="filter__years-start">
                                                {year.from}
                                            </div>
                                            <div id="filter__years-end">
                                                {year.to}
                                            </div>
                                        </div>
                                        <span/>
                                    </div>

                                    <div className="filter__item-menu filter__item-menu--range">
                                        <Nouislider
                                            range={{min: 2000, max: 2020}}
                                            start={[2005, 2015]}
                                            connect
                                            onSlide={values => {
                                                setYear({
                                                    from: values[0],
                                                    to: values[1]
                                                })
                                            }}
                                            format={wNumb({
                                                decimals: 0,
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button onClick={applyFilters} className="filter__btn">apply filter</button>
                            <button onClick={resetFilters} className="filter__btn">Reset Filter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default withRouter(Filter);
