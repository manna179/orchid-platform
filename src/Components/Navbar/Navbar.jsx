import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Navbar = () => {
    return (
        <div className="navbar bg-pink-100 pl-4 pr-4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/movie'>all Movie</NavLink></li>
            <li><NavLink>My Favorites</NavLink></li>
            <li><NavLink to='/movies'>Add Movies</NavLink></li>
            </ul>
          </div>
          <h1 className=" text-xl"><img className='w-12 h-12' src='https://i.ibb.co.com/4gpGNXt/movielogo.jpg' alt="" /></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/movie'>All Movies</NavLink></li>
            <li><NavLink>My Favorites</NavLink></li>
            <li><NavLink to='/movies'>Add Movies</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signUp' className="btn">Register</NavLink>
        </div>

        
        
      </div>
    );
};

export default Navbar;