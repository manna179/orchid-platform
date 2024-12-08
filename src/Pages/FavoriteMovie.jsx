import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FavMovies from "./FavMovies";

const FavoriteMovie = () => {
  const { user } = useContext(AuthContext);
 
  const [data,setData]=useState([])

  const getAllFavMovies = async () => {
    const res = await fetch(`https://orchid-server-side-rho.vercel.app/favorite`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
   
    setData(data)

  };
  const poster = data.poster
  useEffect(() => {
    getAllFavMovies();
  }, []);

  return (
    <div className="min-h-screen mx-auto">
      <h2 className="text-4xl font-semibold text-center mt-4">
        Your Favorite Movies
      </h2>
      <div>
        <p className="text-2xl text-red-400 font-bold w-11/12 mx-auto mb-3">
         
          collection : <span className="text-black">( {data?.length} )</span>
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
