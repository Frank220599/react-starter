import React, {useState} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import wNumb from 'wnumb'

const Form = () => {
    const [rating, setRating] = useState(8.6);
    return (
        <form action="#" className="form">
            <input type="text" className="form__input" placeholder="Title"/>
            <textarea className="form__textarea"
                      placeholder="Review"/>
            <div className="form__slider">
                <div className="form__slider-rating"
                     id="slider__rating">
                    <Nouislider
                        range={{min: 0.0, max: 10.0}}
                        start={8.6}
                        onSlide={value => {
                            setRating(value)
                        }}
                        connect={[true, false]}
                        format={wNumb({
                            decimals: 1
                        })}
                    />
                </div>
                <div className="form__slider-value"
                     id="form__slider-value">
                    {rating}
                </div>
            </div>
            <button type="button" className="form__btn">Send</button>
        </form>
    );
};

export default Form;