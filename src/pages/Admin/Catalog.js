import React from 'react';
import Pagination from "../../components/Admin/Pagination";
import CatalogItem from "../../components/Admin/CatalogItem";
import Modal from "../../components/Admin/Modal";
import {EntityContainer} from "../../base/EntityContainer";

const Catalog = () => {
    return (
        <>
            <div className="col-12">
                <div className="main__title">
                    <h2>Catalog</h2>

                    <span className="main__title-stat">14,452 Total</span>

                    <div className="main__title-wrap">
                        <div className="admin-filter" id="admin-filter__sort">
                            <span className="admin-filter__item-label">Sort by:</span>

                            <div className="admin-filter__item-btn dropdown-toggle" role="navigation"
                                 id="admin-filter-sort"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        <EntityContainer.All entity={'movies'} name={'All'} url={'/movies?limit=5'}>
                            {({items, isFetched}) => (
                                items.map((movie, index) => (
                                    <CatalogItem
                                        id={movie.id}
                                        rating={movie.rating}
                                        title={movie.title}
                                        year={movie.views}
                                    />
                                ))
                            )}
                        </EntityContainer.All>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal.Delete/>
        </>
    );
};

export default Catalog;
