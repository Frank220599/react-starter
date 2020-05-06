import React from 'react';
import cx from "classnames"


const Pagination = ({meta, paginate}) => {
    const {currentPage, totalCount, pageCount} = meta;
    return (
        <div className="col-12">
            <ul className="paginator">
                <li
                    className="paginator__item paginator__item--prev"
                    onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
                >
                    <span><i className="icon ion-ios-arrow-back"/></span>
                </li>
                {
                    [...new Array(4)].map((item, index) => {
                        const page = index + currentPage;
                        return (
                            <li
                                key={page}
                                className={cx(["paginator__item", {' paginator__item--active': currentPage === page}])}
                                onClick={() => paginate(page)}
                            >
                                <span>{page}</span>
                            </li>
                        )
                    })
                }

                <li className="paginator__item paginator__item--next"
                    onClick={() => currentPage !== pageCount && paginate(currentPage + 1)}
                >
                    <span><i className="icon ion-ios-arrow-forward"/></span>
                </li>
            </ul>
        </div>

    );
};

export default Pagination;
