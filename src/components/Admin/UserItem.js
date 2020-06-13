import React from 'react';

const UserItem = ({id, firstName, lastName, email, subscription, status, createdAt, onFunction, commentsCount, reviewsCount}) => {
    return (
        <tr>
            <td>
                <div className="main__table-text">{id}</div>
            </td>
            <td>
                <div className="main__user">
                    <div className="main__avatar">
                        <img src={require('../../assets/images/user.svg')} alt=""/>
                    </div>
                    <div className="main__meta">
                        <h3>{firstName} {lastName}</h3>
                        <span>{email}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="main__table-text">Username</div>
            </td>
            <td>
                <div className="main__table-text">{subscription}</div>
            </td>
            <td>
                <div className="main__table-text">{commentsCount}</div>
            </td>
            <td>
                <div className="main__table-text">{reviewsCount}</div>
            </td>
            <td>
                <div
                    className={`main__table-text main__table-text--${status ? 'green' : 'red'}`}>{status ? 'Approved' : 'Banned'}</div>
            </td>
            <td>
                <div className="main__table-text">24 Oct 2019</div>
            </td>
            <td>
                <div className="main__table-btns">
                    <span onClick={() => onFunction({statusModal: true, id, status})}
                          className="main__table-btn main__table-btn--banned open-modal">
                        <i className="icon ion-ios-lock"/>
                    </span>
                    <span className="main__table-btn main__table-btn--edit">
                        <i className="icon ion-ios-create"/>
                    </span>
                    <span onClick={() => onFunction({deleteModal: true, id})}
                          className="main__table-btn main__table-btn--delete open-modal">
                        <i className="icon ion-ios-trash"/>
                    </span>
                </div>
            </td>
        </tr>
    );
};

export default UserItem;
