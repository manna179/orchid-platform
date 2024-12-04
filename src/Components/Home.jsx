import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import Banner from "./Banner/Banner";

import SingleMovie from "./SingleMovie/SingleMovie";
import Movie from "./Navbar/Movie/Movie";

const Home = () => {
  return (
    <div>
     
    
      <div className="h-[500px]">
        <Banner></Banner>
      </div>
<Movie></Movie>
     

      
    </div>
  );
};

export default Home;
