import React from 'react';
import AddMovieForm from "../../containers/AddMovieForm";

const AddMovie = () => {
    return (
        <>
            <div className="col-12">
                <div className="main__title">
                    <h2>Add new item</h2>
                </div>
            </div>

            <div className="col-12">
               <AddMovieForm/>
            </div>
        </>
    );
};

export default AddMovie;
