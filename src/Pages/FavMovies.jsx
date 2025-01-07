import React from "react";
import { data } from "react-router-dom";

const FavMovies = ({singleFav,getAllFavMovies}) => {
  console.log(singleFav);
  
  
    const {_id, poster, title, genre, rating, summary, movieUser}=singleFav;
    console.log(_id);
    
    
   
    const handleDeleteData = (_id) => {
      console.log(_id);
  
      fetch(`https://orchid-server-side-rho.vercel.app/favorite/${_id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        getAllFavMovies()
      })

     
    };

  return (
    <div className=" glass mb-4 rounded-lg">
      <figure>
        <img className="h-[200px] w-full rounded-md "
          src={poster}
          alt={title}
        />
      </figure>
      <div className="">
        <h2 className="card-title">{title}</h2>
        <p className="text-red-400">Genre : <span className="text-black font-medium">{genre}</span></p>
        
       
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
