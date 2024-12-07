import React from "react";
import { data } from "react-router-dom";

const FavMovies = ({singleFav,getAllFavMovies}) => {
  console.log(singleFav);
  
  
    const {_id, poster, title, genre, duration, release, rating, summary, movieUser}=singleFav;
    console.log(_id);
    
    
   
    const handleDeleteData = (_id) => {
      console.log(_id);
  
      fetch(`http://localhost:5000/favorite/${_id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        getAllFavMovies()
      })

     
    };

  return (
    <div className="card glass w-96">
      <figure>
        <img className="h-[300px] w-full rounded-md m-2"
          src={poster}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-red-400">Genre : <span className="text-black font-medium">{genre}</span></p>
        <p className="text-red-400 ">Duration : <span className="text-black font-medium">{duration} </span> hours</p>
        <p className="text-red-400 ">Release : <span className="text-black font-medium">{release }</span></p>
        <p className="text-red-400 ">Rating : <span className="text-black font-medium">{rating}</span></p>
        <p className="text-red-400 "> summary : <span className="text-gray-500 font-semibold text-sm">{summary}</span></p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleDeleteData(_id)} className="btn bg-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default FavMovies;
