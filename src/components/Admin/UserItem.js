import React from 'react';

const UserItem = ({id, firstName,lastName, email,subscription, status, createdAt}) => {
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
                <div className="main__table-text">13</div>
            </td>
            <td>
                <div className="main__table-text">1</div>
            </td>
            <td>
                <div className="main__table-text main__table-text--green">Approved</div>
            </td>
            <td>
                <div className="main__table-text">24 Oct 2019</div>
            </td>
            <td>
                <div className="main__table-btns">
                    <a href="#modal-status"
                       className="main__table-btn main__table-btn--banned open-modal">
                        <i className="icon ion-ios-lock"></i>
                    </a>
                    <a href="edit-user.html" className="main__table-btn main__table-btn--edit">
                        <i className="icon ion-ios-create"></i>
                    </a>
                    <a href="#modal-delete"
                       className="main__table-btn main__table-btn--delete open-modal">
                        <i className="icon ion-ios-trash"></i>
                    </a>
                </div>
            </td>
        </tr>
    );
};

export default UserItem;