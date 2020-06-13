import React from 'react';
import {ReduxContainer} from "../../../base/ReduxContainer";
import {MovieItem} from "../../../components/Main/MovieItem";

const NewReleases = () => {
    return (
        <ReduxContainer.All entity={'movies'} name={'MovieSlider'}>
            {({items}) => {
                return items.map((movie, index) => {
                    return index > 5
                        ? null
                        : <MovieItem.Full
                            id={movie.id}
                            key={index}
                            age={movie.age}
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

export default NewReleases;
