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
    const [year, setYear] = useState({from: 2005, to: 2015});
    const [rating, setRating] = useState({from: 2.5, to: 8.6});
    const dropdownHandler = index => {
        setIsOpen({[index]: !isOpen[index]});
    };
    const applyFilters = () => {
        const {history, location} = props;
        const query = qs.parse(location.search);
        const search = {...query, year: [year.from, year.to]};

        history.push({
            search: qs.stringify(search)
        });
    };
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
                                        className="filter__item-btn"
                                        onClick={() => dropdownHandler(1)}
                                    >
                                        <input type="button" value="Action/Adventure"/>
                                        <span/>
                                    </div>
                                    <ul className="filter__item-menu">
                                        <EntityContainer.All entity={'genres'} name={'All'} url={'/genres'}>
                                            {({items, isFetched}) => (
                                                items.map(genre => <li key={genre.id}>{genre.name}</li>).reverse()
                                            )}
                                        </EntityContainer.All>
                                    </ul>
                                </div>

                                <div className={cx(["filter__item ", {show: isOpen[2]}])} id="filter__quality">
                                    <span className="filter__item-label">QUALITY:</span>
                                    <div className="filter__item-btn" onClick={() => dropdownHandler(2)}>
                                        <input type="button" value="HD 1080"/>
                                        <span/>
                                    </div>
                                    <ul className="filter__item-menu dropdown-menu scrollbar-dropdown">
                                        <li>HD 1080</li>
                                        <li>HD 720</li>
                                        <li>DVD</li>
                                        <li>TS</li>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default withRouter(Filter);
