import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddMovies from "./Pages/AddMovies.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home.jsx";
import AllMovies from "./Pages/AllMovies.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/allMovies',
        element:<AllMovies></AllMovies>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
    ],
  },
  {
    path: "/movies",
    element: <AddMovies></AddMovies>,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>
);
