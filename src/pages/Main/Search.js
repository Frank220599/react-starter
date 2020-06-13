import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router";
import qs from "query-string";

import Breadcrumb from "../../components/Main/Breadcrumb";
import {EntityContainer} from "../../base/EntityContainer";
import {MovieItem} from "../../components/Main/MovieItem";
import MovieLoader from "../../components/Loaders/MovieLoader";
import ExpectedPremiere from "../../sections/Main/Home/ExpectedPremiere";

const Search = ({location}) => {
    const [search, setSearch] = useState({});
    const query = qs.parse(location.search);
    useEffect(() => {
        setSearch({
            title: {like: query.search}
        })
    }, [location.search]);

    return (
        <>
            <Breadcrumb pageName={'Search for '+ query.search}/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <EntityContainer.All
                            entity={'movies'}
                            name={'Search'}
                            url={'/movies'}
                            params={{
                                limit: 100,
                                sort: '-id',
                                filter: search
                            }}
                        >
                            {({items, isFetched, meta}) => (
                                <>
                                    {isFetched && items.map(movie => (
                                        <MovieItem.Ordinary
                                            key={movie.id}
                                            title={movie.title}
                                            cover={movie.cover}
                                            rating={movie.rating}
                                        />
                                    ))}
                                    {!isFetched && [...new Array(12)].map(() => (
                                        <MovieLoader/>
                                    ))}
                                    {isFetched && meta.totalCount === 0 && <h1 style={{color: '#fff'}}>Nothing Found!</h1>}
                                </>
                            )}
                        </EntityContainer.All>
                    </div>
                </div>
            </section>
            <ExpectedPremiere/>
        </>
    );
};

export default withRouter(Search);
