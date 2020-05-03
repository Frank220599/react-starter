import React from 'react';

const CatalogItem = ({id, title, rating, views,}) => {
    return (
        <tr>
            <td>
                <div className="main__table-text">{id}</div>
            </td>
            <td>
                <div className="main__table-text">{title}</div>
            </td>
            <td>
                <div className="main__table-text main__table-text--rate"><i
                    className="icon ion-ios-star"/> {rating}
                </div>
            </td>
            <td>
                <div className="main__table-text">Movie</div>
            </td>
            <td>
                <div className="main__table-text">{views}</div>
            </td>
            <td>
                <div className="main__table-text main__table-text--green">Visible</div>
            </td>
            <td>
                <div className="main__table-text">24 Oct 2019</div>
            </td>
            <td>
                <div className="main__table-btns">
                    <a href="#modal-status"
                       className="main__table-btn main__table-btn--banned open-modal">
                        <i className="icon ion-ios-lock"/>
                    </a>
                    <a href="#" className="main__table-btn main__table-btn--view">
                        <i className="icon ion-ios-eye"/>
                    </a>
                    <a href="#" className="main__table-btn main__table-btn--edit">
                        <i className="icon ion-ios-create"/>
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

export default CatalogItem;
