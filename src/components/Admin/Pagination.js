import React from 'react';
import cx from "classnames"

const Pagination = ({meta, setPage}) => {
    return (
         <div className="col-12">
            <div className="admin-paginator-wrap">
                <span>10 from {meta.totalCount}</span>

                <ul className="admin-paginator">
                    <li className="admin-paginator__item admin-paginator__item--prev">
                        <span><i className="icon ion-ios-arrow-back"/></span>
                    </li>
                    {
                        [...new Array(meta.pageCount)].map((item, index) => (
                            <li
                                className={cx(["admin-paginator__item", {"admin-paginator__item--active": meta.currentPage === index + 1}])}
                                onClick={() => setPage(index + 1)}
                            >
                                <span>{index + 1}</span>
                            </li>
                        ))
                    }
                    <li className="admin-paginator__item admin-paginator__item--next">
                        <span><i className="icon ion-ios-arrow-forward"/></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;
