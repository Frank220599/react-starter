import React from 'react';
import {NavLink} from "react-router-dom";
import {EntityContainer} from "../../../base/EntityContainer";

const LatestItems = ({onRefresh}) => {
    return (
        <div className="col-12 col-xl-6">
            <div className="dashbox">
                <div className="dashbox__title">
                    <h3><i className="icon ion-ios-film"/> Latest items</h3>

                    <div className="dashbox__wrap">
                        <span className="dashbox__refresh" onClick={() => onRefresh('movies', 'Latest', '/movies', {
                            page: 1,
                            limit: 5,
                            sort: '-id'
                        })}>
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
                            <th>STATUS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <EntityContainer.All
                            entity={"movies"}
                            name={"Latest"}
                            url={"/movies"}
                            params={{page: 1, limit: 5}}
                        >
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
                                                <div
                                                    className={`main__table-text main__table-text--${item.status ? 'green' : 'red'}`}>
                                                    {item.status ? 'Visible' : 'Hidden'}
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

export default LatestItems;
