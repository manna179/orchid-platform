import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import FavMovies from "./FavMovies";

const FavoriteMovie = () => {
  const { user } = useContext(AuthContext);
  // const allFavoriteMovie = useLoaderData();
  const [data,setData]=useState([])

  const getAllFavMovies = async () => {
    const res = await fetch(`http://localhost:5000/favorite`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setData(data)

  };
  const poster = data.poster
  useEffect(() => {
    getAllFavMovies();
  }, []);

  return (
    <div className="min-h-screen mx-auto">
      <h2 className="text-4xl font-semibold text-center">
        Your Favorite Movies
      </h2>
      <div>
        <p className="text-xl font-bold w-11/12 mx-auto">
         
          collection :{data?.length}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto md:gap-4">
          {data?.map((singleFav) => (
            <FavMovies key={singleFav._id} singleFav={singleFav} getAllFavMovies={getAllFavMovies}></FavMovies>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteMovie;
