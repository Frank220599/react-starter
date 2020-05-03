import React from 'react';
import cx from "classnames"

const Search = ({isOpen}) => {
    return (
        <form action="#" className={cx(["header__search", {' header__search--active': isOpen}])}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content">
                            <input type="text" placeholder="Search for a movie, TV Series that you are looking for"/>
                            <button type="button">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Search;