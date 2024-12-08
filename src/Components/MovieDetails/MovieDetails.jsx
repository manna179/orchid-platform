import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";


const MovieDetails = () => {
  const info = useLoaderData();
  const { _id } = info;
  const [movies,setMovies]= useState(info)


const handleAddFavorites=()=>{
  const poster = info.poster;
  const title = info.title;
  const genre = info.genre;
  const minutes = info.duration;
  const releaseYear = info.release;
  const rating = info.rating;
  const summary = info.summary;
  const movieUser = info.movieUser;
  const id = info._id

  console.log(poster,title,genre,minutes,releaseYear,rating,summary,movieUser,id);
  const favorites = {poster,title,genre,minutes,releaseYear,rating,summary,movieUser,id}

  fetch('https://orchid-server-side-rho.vercel.app/favorite',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(favorites)

  })
  .then(res=>res.json())
  .then(data=>{
   toast.success('favorite movie added to db',data);
  })
}



  const handleDelete = (id) => {
   

    fetch(`https://orchid-server-side-rho.vercel.app/movies/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const remainingMovie = movies.filter(movie=>movie._id!== id)
      setMovies(remainingMovie)
    })
   
  };
  return (
    <div className="card glass w-11/12 mx-auto mt-10">

     
      <figure>
        <img
          className="rounded-md m-4 h-[700px] p-4 "
          src={info.poster}
          alt={info.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-red-400">Movie Name :<span className="text-black"> {info.title}</span></h2>
        <p className="text-red-400 ">Genre : <span className="text-black font-medium">{info.genre}</span></p>
        <p className="text-red-400 ">duration : <span className="text-black font-medium">{info.minutes}</span> Min</p>
        <p className="text-red-400 ">release : <span className="text-black font-medium">{info.releaseYear}</span></p>
        <p className="text-red-400 ">rating : <span className="text-black font-medium">{info.rating}</span> </p>
        <p className="text-gray-500">summary : {info.summary}</p>

        <div className="card-actions justify-end">
          <button className="btn bg-red-400" onClick={() => handleDelete(_id)}>
            Delete Movie
          </button>
          
           <Link>
            <Toaster></Toaster>
           <button onClick={handleAddFavorites} className="btn bg-green-300">Add to Favorites</button>
           
           </Link>
         
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
