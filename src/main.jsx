import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddMovies from "./Pages/AddMovies.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import Movie from "./Components/Navbar/Movie/Movie.jsx";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx";
import Login from "./Components/Login/Login.jsx";
import PrivateRoute from "./Pages/PrivateRoute.jsx";
import FavoriteMovie from "./Pages/FavoriteMovie.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Extra from "./Pages/Extra.jsx";

import AddMovieForm from "./Pages/AddMovieForm.jsx";
import FavMovies from "./Pages/FavMovies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://orchid-server-side-rho.vercel.app/movies"),
      },
      
      
      {
        path: "/movie",
        element: <Movie></Movie>,
        loader: () => fetch("https://orchid-server-side-rho.vercel.app/movies"),
      },
      {
        path: "/movies",
        element: (
          <PrivateRoute>
            <AddMovieForm></AddMovieForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/movie/:id",
        element: <MovieDetails></MovieDetails>,

        loader: ({ params }) =>
          fetch(
            `https://orchid-server-side-rho.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/favorite",
        element: <FavoriteMovie></FavoriteMovie>,
      },
      {
        path: "/favorite/:id",
        element: <FavMovies></FavMovies>,
        loader: () =>
          fetch(`https://orchid-server-side-rho.vercel.app/favorite/${id}`),
      },
      {
        path: "/extra",
        element: <Extra></Extra>,
      },
      {
        path: "/updateMovie",
        element: (
          <PrivateRoute>
            <AddMovieForm></AddMovieForm>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
