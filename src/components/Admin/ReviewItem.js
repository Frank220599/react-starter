import React from 'react';

const ReviewItem = () => {
    return (
        <tr>
            <td>
                <div className="main__table-text">23</div>
            </td>
            <td>
                <div className="main__table-text">I Dream in Another Language</div>
            </td>
            <td>
                <div className="main__table-text">John Doe</div>
            </td>
            <td>
                <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
            </td>
            <td>
                <div className="main__table-text main__table-text--rate"><i
                    className="icon ion-ios-star"></i> 7.9
                </div>
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
                        <i className="icon ion-ios-eye"></i>
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

export default ReviewItem;