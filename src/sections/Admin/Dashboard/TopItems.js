import React from 'react';
import {EntityContainer} from "../../../base/EntityContainer";
import {NavLink} from "react-router-dom";

const TopItems = ({onRefresh}) => {

    return (
        <div className="col-12 col-xl-6">
            <div className="dashbox">
                <div className="dashbox__title">
                    <h3><i className="icon ion-ios-trophy"/> Top items</h3>

                    <div className="dashbox__wrap">
                        <span
                            className="dashbox__refresh"
                            onClick={() => onRefresh('movies', 'Top', '/movies', {page: 1, limit: 5, sort: '-rating'})}
                        >
                            <i className="icon ion-ios-refresh"/>
                        </span>
                        <NavLink className="dashbox__more" to="/admin/catalog">View All</NavLink>
                    </div>
                </div>

                <div className="dashbox__table-wrap">
                    <table className="main__table main__table--dash">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>CATEGORY</th>
                            <th>RATING</th>
                        </tr>
                        </thead>
                        <tbody>
                        <EntityContainer.All entity={"movies"} name={"Top"} url={"/movies"}
                                             params={{page: 1, limit: 5}}>
                            {({items, isFetched}) => (
                                <>
                                    {isFetched && items.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="main__table-text">{item.id}</div>
                                            </td>
                                            <td>
                                                <div className="main__table-text">{item.title}</div>
                                            </td>
                                            <td>
                                                <div className="main__table-text">Movie</div>
                                            </td>
                                            <td>
                                                <div className="main__table-text main__table-text--rate">
                                                    <i className="icon ion-ios-star"/> {item.rating}
                                                </div>
                                            </td>
                                        </tr>

                                    ))}
                                </>
                            )}
                        </EntityContainer.All>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
};

export default TopItems;
