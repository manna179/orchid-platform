import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { IoIosStar } from 'react-icons/io';

const SingleMovie = ({singleMovie}) => {
  const {user} = useContext(AuthContext)
    const {_id,poster,title,genre,minutes,releaseYear,rating}= singleMovie
    return (
        <div  className="card p-4 rounded-lg relative shadow-xl">
        <div>
        <img className="rounded-lg h-[200px] w-full"
            src={poster} />
        </div>
        <div >
          <div className=" font-bold text-red-600 mt-2 ">{title} </div>
          <p className='text-red-500 font-medium'>Genre :<span className='text-black font-medium ml-2'> {genre}</span></p>
          <p className='text-white absolute bottom-[170px] right-8 font-bold '> <span className='text-white font-medium ml-2'>{minutes}</span> min</p>
         <div>
         <span className='text-white font-medium absolute bottom-[150px] right-8 ml-2'>{releaseYear}</span>
         </div>
         
          <p className='text-red-500 font-medium flex items-center'><IoIosStar /> <span className='text-black font-medium ml-2'>{rating}</span></p>
          <div className="card-actions ">
           <Link to={`/movie/${_id}`}> <button className="btn btn-link text-red-500 ">See Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SingleMovie;