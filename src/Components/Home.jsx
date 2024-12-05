import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import Banner from "./Banner/Banner";

import SingleMovie from "./SingleMovie/SingleMovie";
import Movie from "./Navbar/Movie/Movie";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {

  const {user}=useContext(AuthContext)
  return (
    <div>

      <h2>{user&&<span>{user?.email}</span>}</h2>
      <div className="h-[500px]">
        <Banner></Banner>
      </div>
      <Movie></Movie>
      <Link to='/movie'><button className="btn w-full btn-primary my-10">See All Movies</button></Link>
    </div>
  );
};

export default Home;
