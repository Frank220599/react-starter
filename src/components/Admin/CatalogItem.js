import React from 'react';
import {NavLink} from "react-router-dom";

const CatalogItem = ({id, title, rating, views, createdAt, status, onSetStatus, onDelete}) => {
    return (
        <tr>
            <td>
                <div className="main__table-text">{id}</div>
            </td>
            <td>
                <div className="main__table-text">{title}</div>
            </td>
            <td>
                <div className="main__table-text main__table-text--rate">
                    <i className="icon ion-ios-star"/> {rating}
                </div>
            </td>
            <td>
                <div className="main__table-text">Movie</div>
            </td>
            <td>
                <div className="main__table-text">{views}</div>
            </td>
            <td>
                <div
                    className={`main__table-text main__table-text--${status ? 'green' : 'red'}`}>{status ? 'Visible' : 'Hidden'}</div>
            </td>
            <td>
                <div className="main__table-text">{createdAt}</div>
            </td>
            <td>
                <div className="main__table-btns">
                    <span onClick={onSetStatus} className="main__table-btn main__table-btn--banned open-modal">
                        <i className="icon ion-ios-lock"/>
                    </span>
                    <NavLink to={`/movies/${id}`} className="main__table-btn main__table-btn--view">
                        <i className="icon ion-ios-eye"/>
                    </NavLink>
                    <span className="main__table-btn main__table-btn--edit">
                        <i className="icon ion-ios-create"/>
                    </span>
                    <span onClick={onDelete} className="main__table-btn main__table-btn--delete open-modal">
                        <i className="icon ion-ios-trash"/>
                    </span>
                </div>
            </td>
        </tr>
    );
};

export default CatalogItem;
