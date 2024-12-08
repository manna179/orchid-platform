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
import MyForm from "./Pages/MyForm.jsx";
import AddMovieForm from "./Pages/AddMovieForm.jsx";
import FavMovies from "./Pages/FavMovies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/movies')

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/movie',
        element:<Movie></Movie>,
        loader:()=>fetch('http://localhost:5000/movies')
      },
      {
        
          path: "/movies",
          element: <PrivateRoute>
            <AddMovieForm></AddMovieForm>
          </PrivateRoute>,
        
      },
      {
        path:'/movie/:id',
        element:<PrivateRoute>
          <MovieDetails></MovieDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
      },
      {
        path:'/favorite',
        element:<FavoriteMovie></FavoriteMovie>,
        
      },
      {
        path:'/favorite/:id',
        element:<FavMovies></FavMovies>,
        loader:()=>fetch(`http://localhost:5000/favorite/${id}`)
      },
      {
        path:'/extra',
        element:<Extra></Extra>
      },
      {
        path:'/updateMovie',
        element:<AddMovieForm></AddMovieForm>
      }
    ],
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
 
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   
   </AuthProvider>
  </StrictMode>
);
