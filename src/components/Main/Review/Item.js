import React from 'react';

const Item = () => {
    return (
        <li className="reviews__item">
            <div className="reviews__autor">
                <img className="reviews__avatar" src={require('../../../assets/images/user.svg')}/>
                <span
                    className="reviews__name">Best Marvel movie in my opinion</span>
                <span
                    className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                <span className="reviews__rating"><i
                    className="icon ion-ios-star"/>8.4</span>
            </div>
            <p className="reviews__text">There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly
                believable.
                If you are going to use a passage of Lorem Ipsum, you
                need
                to be sure there isn't anything embarrassing hidden in
                the
                middle of text.</p>
        </li>
    );
};

export default Item;