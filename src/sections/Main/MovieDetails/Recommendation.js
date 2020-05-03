import React from 'react';
import {MovieItem} from "../../../components/Main/MovieItem";

const Recommendation = () => {
    return (
        <div className="col-12 col-lg-4 col-xl-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="section__title section__title--sidebar">You may also like...</h2>
                </div>
                <MovieItem.Ordinary recommendation={true}/>
                <MovieItem.Ordinary recommendation={true}/>
                <MovieItem.Ordinary recommendation={true}/>
                <MovieItem.Ordinary recommendation={true}/>
            </div>
        </div>
    );
};

export default Recommendation;