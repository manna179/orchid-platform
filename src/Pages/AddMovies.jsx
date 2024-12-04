import React from "react";

const AddMovies = () => {
  const handleAddMovies = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration =parseFloat(form.runtime.value) ;
    const release = form.year.value;
    const rating = form.rating.value;
    const summary = form.summary.value;

    const movies = { poster, title, genre, duration, release, rating, summary };
    console.log(movies);

    fetch('http://localhost:5000/movies',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(movies)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('data added to DB', data);
    })
  };
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Movies</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddMovies} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="url"
                name="poster"
                placeholder="https://example.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="movie title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Genre </span>
              </label>
              <input
                type="text"
                name="genre"
                placeholder="movie type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration </span>
              </label>
              <input
                type="number"
                name="runtime"
                placeholder=" movie duration"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <input
                type="number"
                name="year"
                placeholder="release year"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">summary</span>
            </label>
            <textarea
              type="text"
              name="summary"
              placeholder="description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
