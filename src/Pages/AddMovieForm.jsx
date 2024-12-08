import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const AddMovieForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  
  const genreOptions = [
    { value: "Action", label: "Action" },
    { value: "Comedy", label: "Comedy" },
    { value: "Drama", label: "Drama" },
    { value: "Horror", label: "Horror" },
    { value: "Sci-Fi", label: "Sci-Fi" },
  ];

  
  const releaseYearOptions = Array.from({ length: 50 }, (_, i) => {
    const year = 2023 - i;
    return { value: year, label: year };
  });


  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      genre: data.genre.map((g) => g.value),
      releaseYear: data.releaseYear.value,
    };
  
    try {
      const res = await fetch("https://orchid-server-side-rho.vercel.app/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(formattedData), 
      });
  
      const info = await res.json();
      console.log("Response from server:", info);
    } catch (error) {
      console.error("Error posting movie:", error);
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Add Movie</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        <div>
          <label htmlFor="poster" className="block font-medium mb-1">
            Movie Poster (URL)
          </label>
          <input
            id="poster"
            {...register("poster", {
              required: "Movie poster URL is required",
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif|svg))$/i,
                message: "Enter a valid image URL",
              },
            })}
            placeholder="https://example.com/poster.jpg"
            className="w-full border rounded-md p-2"
          />
          {errors.poster && (
            <p className="text-red-500 text-sm">{errors.poster.message}</p>
          )}
        </div>

       
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Movie Title
          </label>
          <input
            id="title"
            {...register("title", { required: "Movie title is required" })}
            placeholder="Enter movie title"
            className="w-full border rounded-md p-2"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

       
        <div>
          <label htmlFor="genre" className="block font-medium mb-1">
            Genre
          </label>
          <Controller
            name="genre"
            control={control}
            rules={{ required: "At least one genre is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={genreOptions}
                isMulti
                placeholder="Select genres"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            )}
          />
          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre.message}</p>
          )}
        </div>

   
        <div>
          <label htmlFor="releaseYear" className="block font-medium mb-1">
            Release Year
          </label>
          <Controller
            name="releaseYear"
            control={control}
            rules={{ required: "Release year is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={releaseYearOptions}
                placeholder="Select release year"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            )}
          />
          {errors.releaseYear && (
            <p className="text-red-500 text-sm">{errors.releaseYear.message}</p>
          )}
        </div>

    
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="minutes" className="block font-medium mb-1">
              Duration (Minutes)
            </label>
            <input
              id="minutes"
              type="number"
              {...register("minutes", {
                required: "Duration in minutes is required",
              })}
              placeholder="Minutes"
              className="w-full border rounded-md p-2"
            />
            {errors.minutes && (
              <p className="text-red-500 text-sm">{errors.minutes.message}</p>
            )}
          </div>
        </div>

       
        <div>
          <label htmlFor="rating" className="block font-medium mb-1">
            Rating
          </label>
          <input
            id="rating"
            type="number"
            step="0.1"
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Rating must be at least 0" },
              max: { value: 10, message: "Rating cannot exceed 10" },
            })}
            placeholder="Enter rating (0-10)"
            className="w-full border rounded-md p-2"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating.message}</p>
          )}
        </div>

     
        <div>
          <label htmlFor="summary" className="block font-medium mb-1">
            Summary
          </label>
          <textarea
            id="summary"
            {...register("summary", { required: "Summary is required" })}
            placeholder="Enter movie summary"
            className="w-full border rounded-md p-2"
          ></textarea>
          {errors.summary && (
            <p className="text-red-500 text-sm">{errors.summary.message}</p>
          )}
        </div>

      
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
