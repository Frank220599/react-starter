import React from 'react';
import {Review} from "../../../components/Main/Review";

const ReviewsTabContent = () => {
    return (
        <div className='row'>
                <div className="col-12">
                <div className="reviews">
                    <ul className="reviews__list">
                        <Review.Item/>
                    </ul>
                    <Review.Form/>
                </div>
            </div>
        </div>
    );
};

export default ReviewsTabContent;