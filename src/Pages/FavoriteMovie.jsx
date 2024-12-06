import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FavoriteMovie = () => {

    const allFavoriteMovie = useLoaderData()
    console.log(allFavoriteMovie);
    return (
        <div>
            favorite folder :{allFavoriteMovie.length}
        </div>
    );
};

export default FavoriteMovie;