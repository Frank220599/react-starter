import React, {useState} from 'react';
import Pagination from "../../components/Admin/Pagination";
import UserItem from "../../components/Admin/UserItem";
import {EntityContainer} from "../../base/EntityContainer";

const Users = () => {
    return (
        <>
            <div className="col-12">
                <div className="main__title">
                    <h2>Users</h2>

                    <span className="main__title-stat">3,702 Total</span>

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
                                <li>Pricing plan</li>
                                <li>Status</li>
                            </ul>
                        </div>

                        <form action="#" className="main__title-form">
                            <input type="text" placeholder="Find user.."/>
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
                            <th>BASIC INFO</th>
                            <th>USERNAME</th>
                            <th>PRICING PLAN</th>
                            <th>COMMENTS</th>
                            <th>REVIEWS</th>
                            <th>STATUS</th>
                            <th>CRAETED DATE</th>
                            <th>ACTIONS</th>
                        </tr>
                        </thead>

                        <tbody>
                        <EntityContainer.All entity={'users'} name={'All'} url={'/users?include=subscription'}>
                            {({items, isFetched}) => (
                                items.map(user => (
                                    <UserItem
                                        id={user.id}
                                        email={user.email}
                                        subscription={user.subscription.name}
                                        status={user.status}
                                        createdAt={user.timestamp.createdAt}
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                    />
                                ))
                            )}
                        </EntityContainer.All>
                        </tbody>
                    </table>
                </div>
            </div>
            {/*<Pagination metadata={meta} setPage={setPage}/>*/}
        </>
    );
};


export default Users;
