import React from "react";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <h2>Movie Details  : {info.title} </h2>
    <p>{info.genre}</p>
    </div>
  );
};

export default MovieDetails;
