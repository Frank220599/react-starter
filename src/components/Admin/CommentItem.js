import React from 'react';

const CommentItem = ({id,author}) => {
    return (
        <tr>
            <td>
                <div className="main__table-text">{id}</div>
            </td>
            <td>
                <div className="main__table-text">I Dream in Another Language</div>
            </td>
            <td>
                <div className="main__table-text">{author}</div>
            </td>
            <td>
                <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
            </td>
            <td>
                <div className="main__table-text">12 / 7</div>
            </td>
            <td>
                <div className="main__table-text">24 Oct 2019</div>
            </td>
            <td>
                <div className="main__table-btns">
                    <a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
                        <i className="icon ion-ios-eye"/>
                    </a>
                    <a href="#modal-delete"
                       className="main__table-btn main__table-btn--delete open-modal">
                        <i className="icon ion-ios-trash"/>
                    </a>
                </div>
            </td>
        </tr>
    );
};

export default CommentItem;
