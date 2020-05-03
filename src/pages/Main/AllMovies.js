import React from 'react';
import ExpectedPremiere from "../../sections/Main/Home/ExpectedPremiere";
import Breadcrumb from "../../components/Main/Breadcrumb";
import Filter from "../../sections/Main/AllMovies/Filter";
import {MovieItem} from "../../components/Main/MovieItem"
import Pagination from "../../components/Main/Pagination";
import {EntityContainer} from "../../base/EntityContainer";
import {withRouter} from "react-router";
import qs from "query-string";

const AllMovies = (props) => {
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
                            name={'All'} url={'/movies'}
                            params={{page: query.page, limit: 10, sort: '-id'}}
                        >
                            {({items, isFetched, meta}) => (
                                <>
                                    {items.map(movie => (
                                        <MovieItem.Ordinary
                                            key={movie.id}
                                            title={movie.title}
                                            cover={movie.cover}
                                        />
                                    ))}
                                    {isFetched && <Pagination paginate={paginate} meta={meta}/>}
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
