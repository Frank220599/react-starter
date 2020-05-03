import React from 'react';
import {MovieItem} from "../../../components/Main/MovieItem";

const ExpectedPremiere = () => {
    return (
        <section className="section section--bg expected-premiere">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section__title">Expected premiere</h2>
                    </div>
                    <MovieItem.Ordinary/>
                    <div className="col-12">
                        <a href="#" className="section__btn">Show more</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpectedPremiere;