import React from 'react';

const Item = ({text, author, like, dislike}) => {
    return (
        <li className="comments__item">
            <div className="comments__autor">
                <img className="comments__avatar" src={require('../../../assets/images/user.svg')} alt=""/>
                <span className="comments__name">{author}</span>
                <span className="comments__time">24.08.2018, 16:41</span>
            </div>
            <p className="comments__text">{text}</p>
            <div className="comments__actions">
                <div className="comments__rate">
                    <button type="button"><i className="icon ion-md-thumbs-up"/>{like}</button>
                    <button type="button">{dislike}<i className="icon ion-md-thumbs-down"/></button>
                </div>
                <button type="button"><i className="icon ion-ios-share-alt"/>Reply</button>
                <button type="button"><i className="icon ion-ios-quote"/>Quote</button>
            </div>
        </li>
    );
};

export default Item;
