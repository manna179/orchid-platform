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
          element: <AddMovies></AddMovies>,
        
      },
      {
        path:'/movieDetails',
        element:<MovieDetails></MovieDetails>
      }
    ],
  },
 
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   
   </AuthProvider>
  </StrictMode>
);
