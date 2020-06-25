import React, {useEffect, useState} from 'react';
import ExpectedPremiere from "../../sections/Main/Home/ExpectedPremiere";
import Breadcrumb from "../../components/Main/Breadcrumb";
import Filter from "../../sections/Main/AllMovies/Filter";
import {MovieItem} from "../../components/Main/MovieItem"
import Pagination from "../../components/Main/Pagination";
import {EntityContainer} from "../../base/EntityContainer";
import {withRouter} from "react-router";
import qs from "query-string";
import MovieLoader from "../../components/Loaders/MovieLoader";

const AllMovies = (props) => {
    const [filters, setFilters] = useState({});
    useEffect(() => {
        const query = qs.parse(location.search);
        if (query.year || query.rating) {
            setFilters({
                genre: {id: query.genre},
                releaseYear: {from: query.year[0], to: query.year[1]},
                rating: {from: query.rating[0], to: query.rating[1]},
                quality: {id: query.quality}
            })
        } else {
            setFilters({})
        }
    }, [props.location.search]);
    const paginate = (page) => {
        const {history, location} = props;
        const query = qs.parse(location.search);
        const search = {...query, page: page};

        history.push({
            search: qs.stringify(search)
        });
    };
    const {location} = props;
    const query = qs.parse(location.search);

    return (
        <>
            <Breadcrumb pageName={'All Movies'}/>
            <Filter/>
            <div className="catalog">
                <div className="container">
                    <div className="row">
                        <EntityContainer.All
                            entity={'movies'}
                            name={'All'}
                            url={'/movies'}
                            params={{
                                page: query.page,
                                limit: 12,
                                sort: '-id',
                                filter: filters
                            }}
                        >
                            {({items, isFetched, meta}) => (
                                <>
                                    {
                                        isFetched && items.length === 0 &&
                                            <div>
                                                <h1 style={{color: '#fff'}}>No items found!</h1>
                                            </div>
                                    }
                                    {isFetched && items.map(movie => (
                                        <MovieItem.Ordinary
                                            id={movie.id}
                                            key={movie.id}
                                            title={movie.title}
                                            cover={movie.cover}
                                            rating={movie.rating}
                                        />
                                    ))}
                                    {!isFetched && [...new Array(12)].map(() => (
                                        <MovieLoader/>
                                    ))}
                                    {isFetched && meta.pageCount > 1 && <Pagination paginate={paginate} meta={meta}/>}
                                </>
                            )}
                        </EntityContainer.All>
                    </div>
                </div>
            </div>
            <ExpectedPremiere/>
        </>
    );
};

export default withRouter(AllMovies);
