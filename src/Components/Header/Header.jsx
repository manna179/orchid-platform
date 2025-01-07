import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Header = () => {
  
  return (
    <div>
      <Navbar></Navbar>
     

      <Outlet></Outlet>
      <div className="w-full">
      <div className="bg-pink-200">
      <Footer></Footer>
      </div>
      </div>
    </div>
  );
};

export default Header;
