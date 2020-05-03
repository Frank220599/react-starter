import React from 'react';

const Item = () => {
    return (
        <li className="comments__item comments__item--answer">
            <div className="comments__autor">
                <img className="comments__avatar" src={require('../../../assets/images/user.svg')}
                     alt=""/>
                <span className="comments__name">John Doe</span>
                <span
                    className="comments__time">24.08.2018, 16:41</span>
            </div>
            <p className="comments__text">Lorem Ipsum is simply dummy
                text
                of the printing and typesetting industry. Lorem Ipsum
                has
                been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            <div className="comments__actions">
                <div className="comments__rate">
                    <button type="button"><i
                        className="icon ion-md-thumbs-up"/>8
                    </button>

                    <button type="button">3<i
                        className="icon ion-md-thumbs-down"/>
                    </button>
                </div>

                <button type="button"><i
                    className="icon ion-ios-share-alt"/>Reply
                </button>
                <button type="button"><i
                    className="icon ion-ios-quote"/>Quote
                </button>
            </div>
        </li>
    );
};

export default Item;