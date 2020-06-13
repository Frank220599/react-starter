import React from 'react';
import {Review} from "../../../components/Main/Review";
import {EntityContainer} from "../../../base/EntityContainer";
import {Comment} from "../../../components/Main/Comment";

const ReviewsTabContent = ({id}) => {
    return (
        <div className='row'>
                <div className="col-12">
                <div className="reviews">
                    <ul className="reviews__list">
                        <EntityContainer.All
                            entity={'reviews'}
                            name={'All'}
                            url={'/reviews'}
                            params={{filter: {movieId: id}}}
                        >
                            {({items, isFetched, meta}) => (
                                items.map((comment, index) => (
                                    <Review.Item/>
                                ))
                            )}
                        </EntityContainer.All>
                    </ul>
                    <Review.Form/>
                </div>
            </div>
        </div>
    );
};

export default ReviewsTabContent;
