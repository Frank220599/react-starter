import React from 'react';
import Pagination from "../../components/Admin/Pagination";
import ReviewItem from "../../components/Admin/ReviewItem";

const Reviews = () => {
    return (
        <>
            <div className="col-12">
                <div className="main__title">
                    <h2>Reviews</h2>

                    <span className="main__title-stat">9,071 Total</span>

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
                            <th>RATING</th>
                            <th>LIKE / DISLIKE</th>
                            <th>CRAETED DATE</th>
                            <th>ACTIONS</th>
                        </tr>
                        </thead>

                        <tbody>
                        <ReviewItem/>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default Reviews;
