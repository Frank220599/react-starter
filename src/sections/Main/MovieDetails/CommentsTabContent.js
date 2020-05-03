import React from 'react';
import {Comment} from "../../../components/Main/Comment";

const CommentsTabContent = () => {
    return (
        <div className='row'>
            <div className="col-12">
                <div className="comments">
                    <ul className="comments__list">
                        <Comment.Item/>
                    </ul>

                    <Comment.Form/>
                </div>
            </div>
        </div>
    );
};

export default CommentsTabContent;