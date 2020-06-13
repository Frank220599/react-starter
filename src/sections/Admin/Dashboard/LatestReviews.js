import React from 'react';
import {NavLink} from "react-router-dom";

const LatestReviews = ({onRefresh}) => {
    return (
        <div className="col-12 col-xl-6">
            <div className="dashbox">
                <div className="dashbox__title">
                    <h3><i className="icon ion-ios-star-half"/> Latest reviews</h3>

                    <div className="dashbox__wrap">
                            <span className="dashbox__refresh" onClick={() => onRefresh('reviews', 'Latest', '/reviews', {
                                page: 1,
                                limit: 5,
                                sort: '-id'
                            })}>
                            <i className="icon ion-ios-refresh"/>
                            </span>
                        <NavLink className="dashbox__more" to="/admin/reviews">View All</NavLink>
                    </div>
                </div>

                <div className="dashbox__table-wrap">
                    <table className="main__table main__table--dash">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>ITEM</th>
                            <th>AUTHOR</th>
                            <th>RATING</th>
                        </tr>
                        </thead>
                        <tbody>
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
                                <div className="main__table-text main__table-text--rate"><i
                                    className="icon ion-ios-star"/> 7.2
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LatestReviews;
