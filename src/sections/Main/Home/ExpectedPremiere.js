import React, {useEffect, useRef, useState} from 'react';
import {withRouter} from "react-router";
import {EntityContainer} from "../../../base/EntityContainer";
import {MovieItem} from "../../../components/Main/MovieItem";
import qs from "query-string"

const ExpectedPremiere = ({location, history}) => {
    const query = qs.parse(location.search);
    const loadMore = (page) => {
        const search = {...query, page};
        history.push({
            search: qs.stringify(search)
        })
    };
    return (
        <section className="section section--bg expected-premiere">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section__title">Expected premiere</h2>
                    </div>
                    <EntityContainer.All
                        entity={"movies"}
                        name={"ExpectedPrimere"}
                        url={"/movies"}
                        params={{limit: 6, page: query.page}}
                        appendIds
                    >
                        {({items, isFetched, meta}) => (
                            <>
                                {items.length && items.map((movie, index) => {
                                    return <MovieItem.Ordinary
                                        id={movie.id}
                                        key={index}
                                        cover={movie.cover}
                                        title={movie.title}
                                        rating={movie.rating}
                                    />
                                })}
                                {isFetched && meta.currentPage < meta.pageCount && (
                                    <div className="col-12">
                                        <span
                                            onClick={() => loadMore(meta.currentPage + 1)}
                                            style={{cursor: 'pointer'}}
                                            className="section__btn">
                                            Show more
                                        </span>
                                    </div>
                                )}
                            </>
                        )}
                    </EntityContainer.All>

                </div>
            </div>
        </section>
    );
};

export default withRouter(ExpectedPremiere);
