import React from "react";
import { useLoaderData } from "react-router-dom";
import FavMovies from "./FavMovies";

const FavoriteMovie = () => {
  const allFavoriteMovie = useLoaderData();
  console.log(allFavoriteMovie);
  return (
    <div className="min-h-screen mx-auto">
      <h2 className="text-4xl font-semibold text-center">
        Your Favorite Movies
      </h2>
      <div>
        <p className="text-xl font-bold w-11/12 mx-auto">
          {" "}
          collection :{allFavoriteMovie.length}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto md:gap-4">
        {
            allFavoriteMovie.map(singleFav => <FavMovies key={singleFav._id} singleFav={singleFav}></FavMovies>)
        }
        </div>
      </div>
    </div>
  );
};

export default FavoriteMovie;
