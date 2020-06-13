import React, {useState} from 'react';
import Pagination from "../../components/Admin/Pagination";
import UserItem from "../../components/Admin/UserItem";
import {EntityContainer} from "../../base/EntityContainer";
import qs from "query-string";
import {ReduxContainer} from "../../base/ReduxContainer";
import {withRouter} from "react-router";
import Modal from "../../components/Admin/Modal";
import {connect} from "react-redux";
import {UserDelete, UserSetStatus} from "../../store/actions/system";

const Users = (props) => {
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
    const deleteUser = (id) => {
        props.dispatch(
            UserDelete(id, setModalOptions({}))
        )
    };
    const setStatus = (id, status) => {
        props.dispatch(
            UserSetStatus({id, status: !status}, setModalOptions({}))
        )
    };
    return (
        <>
            <Modal.Delete
                isOpen={modalOptions.deleteModal}
                closeModal={() => setModalOptions({deleteModal: false, id: null})}
                itemName={'User'}
                deleteItem={() => deleteUser(modalOptions.id)}
            />
            <Modal.Status
                isOpen={modalOptions.statusModal}
                closeModal={() => setModalOptions({statusModal: false, id: null})}
                itemName={'User'}
                setStatus={() => setStatus(modalOptions.id, modalOptions.status)}
            />
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
                        <EntityContainer.All
                            entity={'users'}
                            name={'All'}
                            url={'/users'}
                            params={{limit: 20, page: query.page, include: 'subscription,comments,reviews'}}
                        >
                            {({items, isFetched}) => (
                                items.map(user => {
                                    if (user.id === props.user.id) return null;
                                    return (
                                        <UserItem
                                            key={user.id}
                                            id={user.id}
                                            email={user.email}
                                            subscription={user.subscription.name}
                                            status={user.status}
                                            createdAt={user.timestamp.createdAt}
                                            firstName={user.firstName}
                                            lastName={user.lastName}
                                            onFunction={setModalOptions}
                                            commentsCount={user.comments.length}
                                            reviewsCount={user.reviews.length}
                                        />
                                    )
                                })
                            )}
                        </EntityContainer.All>
                        </tbody>
                    </table>
                    <ReduxContainer.All entity={'users'} name={'All'}>
                        {({isFetched, meta}) => (
                            <>
                                {isFetched && <Pagination meta={meta} limit={20} paginate={paginate}/>}
                            </>
                        )}
                    </ReduxContainer.All>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    user: state.system.user.data
});

export default connect(mapStateToProps)(withRouter(Users));
