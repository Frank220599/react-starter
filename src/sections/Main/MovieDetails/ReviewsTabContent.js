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
                            params={{filter: {movieId: id}, include: 'user'}}
                        >
                            {({items, isFetched, meta}) => (
                                items.map((review, index) => (
                                    <Review.Item
                                        title={review.title}
                                        text={review.text}
                                        author={review.user.firstName + " " + review.user.lastName}
                                        rating={review.rating}
                                    />
                                ))
                            )}
                        </EntityContainer.All>
                    </ul>
                    <Review.Form id={id}/>
                </div>
            </div>
        </div>
    );
};

export default ReviewsTabContent;
