import React from 'react';
import cx from "classnames"

const Pagination = ({meta, paginate, limit}) => {
    const {currentPage, totalCount, pageCount} = meta;
    return (
        <div className="col-12">
            <div className="admin-paginator-wrap">
                <span>{meta.currentPage * limit} from {meta.totalCount}</span>
                <ul className="admin-paginator">
                    <li className="admin-paginator__item admin-paginator__item--prev">
                        <span><i className="icon ion-ios-arrow-back"/></span>
                    </li>
                    {
                        [...new Array(4)].map((item, index) => {
                            const page = index + currentPage;
                            return (
                                <li
                                    key={page}
                                    className={cx(["admin-paginator__item", {'admin-paginator__item--active': currentPage === page}])}
                                    onClick={() => paginate(page)}
                                >
                                    <span>{page}</span>
                                </li>
                            )
                        })
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
