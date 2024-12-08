import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SingleMovie = ({singleMovie}) => {
  const {user} = useContext(AuthContext)
    const {_id,poster,title,genre,minutes,releaseYear,rating}= singleMovie
    return (
        <div  className="card p-4 rounded-lg shadow-xl">
        <div>
        <img className="rounded-lg h-[300px] w-full"
            src={poster} />
        </div>
        <div className="card-body">
          <h2 className="card-title text-red-600 ">{title}</h2>
          <p className='text-red-400 font-bold'>Genre :<span className='text-black font-medium ml-2'> {genre}</span></p>
          <p className='text-red-400 font-bold'>Runtime : <span className='text-black font-medium ml-2'>{minutes}</span> hours</p>
          <p className='text-red-400 font-bold'>Release year: <span  className='text-black font-medium ml-2'>{releaseYear}</span></p>
          <p className='text-red-400 font-bold'>Rating: <span className='text-black font-medium ml-2'>{rating}</span></p>
          <div className="card-actions justify-end">
           <Link to={`/movie/${_id}`}> <button className="btn bg-red-400 ">See Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SingleMovie;