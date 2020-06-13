import React from 'react';

const CommentItem = ({id, author, title, text, createdAt, like, dislike, onView, onDelete}) => {
    return (
        <tr>
            <td>
                <div className="main__table-text">{id}</div>
            </td>
            <td>
                <div className="main__table-text">{title}</div>
            </td>
            <td>
                <div className="main__table-text">{author}</div>
            </td>
            <td>
                <div className="main__table-text">{text}</div>
            </td>
            <td>
                <div className="main__table-text">{like} / {dislike}</div>
            </td>
            <td>
                <div className="main__table-text">{createdAt}</div>
            </td>
            <td>
                <div className="main__table-btns">
                    <span onClick={onView} className="main__table-btn main__table-btn--view open-modal">
                        <i className="icon ion-ios-eye"/>
                    </span>
                    <span onClick={onDelete} className="main__table-btn main__table-btn--delete open-modal">
                        <i className="icon ion-ios-trash"/>
                    </span>
                </div>
            </td>
        </tr>
    );
};

export default CommentItem;
