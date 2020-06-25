import React from 'react';

const Item = ({rating, title, text, author}) => {
    return (
        <li className="reviews__item">
            <div className="reviews__autor">
                <img className="reviews__avatar" src={require('../../../assets/images/user.svg')}/>
                <span
                    className="reviews__name">{title}</span>
                <span
                    className="reviews__time">24.08.2018, 17:53 by {author}</span>

                <span className="reviews__rating"><i
                    className="icon ion-ios-star"/>{rating}</span>
            </div>
            <p className="reviews__text">{text}</p>
        </li>
    );
};

export default Item;
