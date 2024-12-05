import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleMovie from "../../SingleMovie/SingleMovie";


const Movie = () => {
  const allMovie = useLoaderData();
  const [movie, setMovie] = useState(allMovie);

  return (
    <div>

      <div>
        <h1 className="text-2xl font-semibold ">Featured:</h1>
      </div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {
        movie.map(singleMovie=><SingleMovie key={singleMovie._id} singleMovie={singleMovie}></SingleMovie>
           
        )
     }
     </div>
     
    </div>
  );

}
export default Movie
