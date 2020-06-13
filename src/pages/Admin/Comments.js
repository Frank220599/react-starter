import React, {useState} from 'react';
import {withRouter} from "react-router";
import qs from "query-string";
import moment from "moment"

import Pagination from "../../components/Admin/Pagination";
import CommentItem from "../../components/Admin/CommentItem";
import {EntityContainer} from "../../base/EntityContainer";
import {ReduxContainer} from "../../base/ReduxContainer";
import Modal from "../../components/Admin/Modal";
import {CommentDelete} from "../../store/actions/system";
import {connect} from "react-redux";

const Comments = (props) => {
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

    const deleteComment = (id) => {
        props.dispatch(
            CommentDelete(id, setModalOptions({}))
        )
    };
    return (
        <>
            <Modal.View
                closeModal={() => setModalOptions({})}
                isOpen={modalOptions.viewModal}
                author={modalOptions.author}
                text={modalOptions.text}
                like={modalOptions.like}
                dislike={modalOptions.dislike}
                time={modalOptions.time}
            />
            <Modal.Delete
                isOpen={modalOptions.deleteModal}
                closeModal={() => setModalOptions({})}
                itemName={'Comment'}
                deleteItem={() => deleteComment(modalOptions.id)}
            />
            <div className="col-12">
                <div className="main__title">
                    <h2>Comments</h2>

                    <span className="main__title-stat">21,356 Total</span>

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
                            </ul>
                        </div>

                        <form action="#" className="main__title-form">
                            <input type="text" placeholder="Key word.."/>
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
                            <th>ITEM</th>
                            <th>AUTHOR</th>
                            <th>TEXT</th>
                            <th>LIKE / DISLIKE</th>
                            <th>CRAETED DATE</th>
                            <th>ACTIONS</th>
                        </tr>
                        </thead>

                        <tbody>
                        <EntityContainer.All
                            entity={'comments'}
                            name={'All'}
                            url={'/comments'}
                            params={{limit: 20, page: query.page, include: 'user,movie'}}
                        >
                            {({items, isFetched}) => (
                                items.map(comment => (
                                    <CommentItem
                                        key={comment.id}
                                        id={comment.id}
                                        title={comment.movie.title}
                                        author={`${comment.user.firstName} ${comment.user.lastName}`}
                                        text={`${comment.text.substring(0, 25)}...`}
                                        createdAt={moment(comment.timestamp.createdAt).format('DD MMM YYYY')}
                                        like={comment.like}
                                        dislike={comment.dislike}
                                        onView={() => setModalOptions({
                                            viewModal: true,
                                            author: `${comment.user.firstName} ${comment.user.lastName}`,
                                            text: comment.text,
                                            like: comment.like,
                                            dislike: comment.dislike,
                                            time: moment(comment.timestamp.createdAt).format('DD.MM.YYYY, HH:MM')
                                        })}
                                        onDelete={() => setModalOptions({
                                            deleteModal: true,
                                            id: comment.id
                                        })}
                                    />
                                ))
                            )}
                        </EntityContainer.All>
                        </tbody>
                    </table>
                    <ReduxContainer.All entity={'comments'} name={'All'}>
                        {({items, isFetched, meta}) => (
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

export default connect()(withRouter(Comments));
