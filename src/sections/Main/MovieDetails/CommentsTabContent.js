import React from 'react';
import {Comment} from "../../../components/Main/Comment";
import {EntityContainer} from "../../../base/EntityContainer";

const CommentsTabContent = ({id}) => {
    return (
        <div className='row'>
            <div className="col-12">
                <div className="comments">
                    <ul className="comments__list">
                        <EntityContainer.All
                            entity={'comments'}
                            name={'All'}
                            url={'/comments'}
                            params={{filter: {movieId: id}, include: ['user']}}
                        >
                            {({items, isFetched, meta}) => (
                                items.map((comment, index) => (
                                    <Comment.Item
                                        author={comment.user.firstName + " " + comment.user.lastName}
                                        text={comment.text}
                                        like={comment.like}
                                        dislike={comment.dislike}
                                    />
                                ))
                            )}
                        </EntityContainer.All>
                    </ul>
                    <Comment.Form/>
                </div>
            </div>
        </div>
    );
};

export default CommentsTabContent;
