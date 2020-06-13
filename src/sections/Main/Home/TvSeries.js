import React from 'react';
import {ReduxContainer} from "../../../base/ReduxContainer";
import {MovieItem} from "../../../components/Main/MovieItem";

const TvSeries = () => {
    return (
        <ReduxContainer.All entity={'movies'} name={'MovieSlider'}>
            {({items}) => {
                return items.map((movie, index) => {
                    return index > 12
                        ? null
                        : <MovieItem.Ordinary
                            id={movie.id}
                            key={index}
                            cover={movie.cover}
                            title={movie.title}
                            description={movie.description}
                            rating={movie.rating}
                        />

                })
            }}
        </ReduxContainer.All>
    );
};

export default TvSeries;
