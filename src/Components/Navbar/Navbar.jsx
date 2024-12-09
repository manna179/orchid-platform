import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate()
  const { user, handleSignOut } = useContext(AuthContext);
  
const handleNavigate = (link)=>{
  if(user){
    navigate(link)
  }else{
    navigate(`/login?redirect=${link}`)
    console.log(link);
  }
}
  return (
    <div className="navbar bg-pink-100 pl-4 pr-4 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movie">all Movie</NavLink>
            </li>
            <li>
              <button onClick={()=>handleNavigate('/favorite')}  >My Favorites</button>
            </li>
            <li>
              <NavLink to='/movies'>Add Movies</NavLink>
            </li>
          </ul>
        </div>
        <h1 className=" text-xl">
          <img
            className="w-12 h-12 bg-transparent rounded-sm "
            src="https://i.ibb.co.com/4gpGNXt/movielogo.jpg"
            alt="logo"
          />
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movie">All Movies</NavLink>
          </li>
          <li>
          <button onClick={()=>handleNavigate('/favorite')}  >My Favorites</button>
          </li>
          <li>
            <NavLink to='/movies'>Add Movies</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">


       {user&& user?.email ? <div className="relative group  bg-gray-200 flex items-center justify-center rounded-md">
        <button data-aos="zoom-in" title={user.email} >
            <img
              className="h-8  w-8 bg-cover border-red-600 border-2 rounded-full object-cover"
              src={user.photoURL}
              alt=""
            />
          </button>

          <button title={user?.email} onClick={handleSignOut} className="absolute hidden group-hover:flex bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 mr-4">
          <NavLink to="/login" className="font-semibold">
            Logout
          </NavLink>
          </button>
        </div>:<NavLink to="/login" className="font-semibold">
            Login
          </NavLink>}

        
      </div>
    </div>
  );
};

export default Navbar;
