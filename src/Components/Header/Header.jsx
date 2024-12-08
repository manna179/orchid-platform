import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Header = () => {
  
  return (
    <div>
      <Navbar></Navbar>
     

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Header;
