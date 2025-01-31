import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleMovie from "../../SingleMovie/SingleMovie";


const Movie = () => {
  const allMovie = useLoaderData();
  const [movie, setMovie] = useState(allMovie);
  

  return (
    <div>

      <div>
        <h1 className="text-2xl font-semibold ml-4 "><span className="text-red-600">|</span> Featured </h1>
      </div>
     
     <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2">
     {
        movie.map(singleMovie=><SingleMovie key={singleMovie._id} singleMovie={singleMovie}></SingleMovie>
           
        )
     }
     </div>
     
    </div>
  );

}
export default Movie
