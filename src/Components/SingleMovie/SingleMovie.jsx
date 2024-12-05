import React from 'react';
import { Link } from 'react-router-dom';

const SingleMovie = ({singleMovie}) => {
    const {poster,title,genre,duration,release,rating}= singleMovie
    return (
        <div  className="card p-4 rounded-lg shadow-xl">
        <div>
        <img className="rounded-lg"
            src={poster} />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Genre: {genre}</p>
          <p>Runtime: {duration} hours</p>
          <p>Release year: {release}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
           <Link to='/movieDetails'> <button className="btn btn-primary">See Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default SingleMovie;