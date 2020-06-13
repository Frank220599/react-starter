import React from 'react';
import {EntityContainer} from "../../../base/EntityContainer";
import {NavLink} from "react-router-dom";

const LatestUsers = ({onRefresh}) => {
    return (
        <div className="col-12 col-xl-6">
            <div className="dashbox">
                <div className="dashbox__title">
                    <h3><i className="icon ion-ios-contacts"/> Latest users</h3>
                    <div className="dashbox__wrap">
                          <span className="dashbox__refresh" onClick={() => onRefresh('users', 'All', '/users', {
                              page: 1,
                              limit: 5,
                              sort: '-id'
                          })}>
                            <i className="icon ion-ios-refresh"/>
                          </span>
                        <NavLink className="dashbox__more" to="/admin/users">View All</NavLink>
                    </div>
                </div>
                <div className="dashbox__table-wrap">
                    <table className="main__table main__table--dash">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>FULL NAME</th>
                            <th>EMAIL</th>
                            <th>USERNAME</th>
                        </tr>
                        </thead>
                        <tbody>
                        <EntityContainer.All entity={"users"} name={"All"} url={"/users"} params={{page: 1, limit: 5}}>
                            {({items, isFetched}) => (
                                <>
                                    {isFetched && items.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="main__table-text">{item.id}</div>
                                            </td>
                                            <td>
                                                <div className="main__table-text">{item.firstName} {item.lastName}</div>
                                            </td>
                                            <td>
                                                <div
                                                    className="main__table-text main__table-text--grey">{item.email}</div>
                                            </td>
                                            <td>
                                                <div className="main__table-text">Username</div>
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

export default LatestUsers;
