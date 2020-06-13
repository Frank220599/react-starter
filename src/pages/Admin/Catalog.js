import React, {useState} from 'react';
import qs from "query-string";
import {withRouter} from "react-router";
import moment from "moment"
import {connect} from "react-redux";

import Pagination from "../../components/Admin/Pagination";
import CatalogItem from "../../components/Admin/CatalogItem";
import Modal from "../../components/Admin/Modal";
import {EntityContainer} from "../../base/EntityContainer";
import {ReduxContainer} from "../../base/ReduxContainer";
import {MovieSetStatus, MovieDelete} from "../../store/actions/system";


const Catalog = (props) => {
    const [modalOptions, setModalOptions] = useState({});
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
    const setStatus = (id, status) => {
        props.dispatch(
            MovieSetStatus({id, status: !status}, setModalOptions({}))
        )
    };
    const deleteMovie = (id) => {
        props.dispatch(
            MovieDelete(id, setModalOptions({}))
        )
    };
    return (
        <>
            <Modal.Status
                isOpen={modalOptions.statusModal}
                closeModal={() => setModalOptions({statusModal: false, id: null})}
                itemName={'Movie'}
                setStatus={() => setStatus(modalOptions.id, modalOptions.status)}
            />
            <Modal.Delete
                isOpen={modalOptions.deleteModal}
                closeModal={() => setModalOptions({deleteModal: false, id: null})}
                itemName={'Movie'}
                deleteItem={() => deleteMovie(modalOptions.id)}
            />
            <div className="col-12">
                <div className="main__title">
                    <h2>Catalog</h2>
                    <span className="main__title-stat">14,452 Total</span>
                    <div className="main__title-wrap">
                        <div className="admin-filter" id="admin-filter__sort">
                            <span className="admin-filter__item-label">Sort by:</span>

                            <div className="admin-filter__item-btn dropdown-toggle" id="admin-filter-sort">
                                <input type="button" value="Date created"/>
                                <span/>
                            </div>

                            <ul className="admin-filter__item-menu dropdown-menu scrollbar-dropdown"
                                aria-labelledby="admin-filter-sort">
                                <li>Date created</li>
                                <li>Rating</li>
                                <li>Views</li>
                            </ul>
                        </div>

                        <form action="#" className="main__title-form">
                            <input type="text" placeholder="Find movie / tv series.."/>
                            <button type="button">
                                <i className="icon ion-ios-search"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="main__table-wrap">
                    <table className="main__table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>RATING</th>
                            <th>CATEGORY</th>
                            <th>VIEWS</th>
                            <th>STATUS</th>
                            <th>CREATED DATE</th>
                            <th>ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <EntityContainer.All
                            entity={'movies'}
                            name={'All'}
                            url={'/movies'}
                            params={{limit: 20, page: query.page}}
                        >
                            {({items, isFetched, meta}) => (
                                <>
                                    {items.map((movie, index) => (
                                        <CatalogItem
                                            id={movie.id}
                                            key={movie.id}
                                            status={movie.status}
                                            rating={movie.rating}
                                            title={movie.title}
                                            year={movie.age}
                                            views={movie.views}
                                            createdAt={moment(movie.timestamp.createdAt).format('DD MMM YYYY')}
                                            onSetStatus={() => setModalOptions({
                                                statusModal: true,
                                                id: movie.id,
                                                status: movie.status
                                            })}
                                            onDelete={() => setModalOptions({
                                                deleteModal: true,
                                                id: movie.id
                                            })}
                                        />
                                    ))}
                                </>
                            )}
                        </EntityContainer.All>
                        </tbody>
                    </table>
                    <ReduxContainer.All entity={'movies'} name={'All'}>
                        {({items, isFetched, meta}) => (
                            <>
                                {isFetched && <Pagination meta={meta} limit={20} paginate={paginate}/>}
                            </>
                        )}
                    </ReduxContainer.All>
                </div>
            </div>
            <Modal.Delete/>
        </>
    );
};


export default connect()(withRouter(Catalog));
