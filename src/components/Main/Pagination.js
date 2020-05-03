import React from 'react';
import cx from "classnames"


const Pagination = ({meta, paginate}) => {
    const {currentPage, totalCount, pageCount} = meta;
    return (
        <div className="col-12">
            <ul className="paginator">
                <li className="paginator__item paginator__item--prev">
                    <span><i className="icon ion-ios-arrow-back"/></span>
                </li>
                {
                    [...new Array(pageCount)].map((item, index) => {
                        const page = index + 1;
                        return (
                            <li
                                key={page}
                                className={cx(["paginator__item", {' paginator__item--active': currentPage === page}])}
                                onClick={() => paginate(page)}
                            >
                                <span>{index + 1}</span>
                            </li>
                        )
                    })
                }

                <li className="paginator__item paginator__item--next">
                    <span><i className="icon ion-ios-arrow-forward"/></span>
                </li>
            </ul>
        </div>

    );
};

export default Pagination;
