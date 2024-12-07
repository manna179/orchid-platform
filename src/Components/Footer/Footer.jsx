import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <BiMoviePlay className="w-16 h-16" />
        <p>
          ORCHID.com
          <br />A movie platform since 1978
          <br />Copyright © 2024 - All right reserved
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-gray-100">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to='https://x.com/'>
            <FaTwitter className="h-12 w-12" />
          </Link>
          <Link to='https://www.facebook.com/'>
            <FaFacebook className="w-12 h-12" />
          </Link>
          <Link to='https://www.youtube.com/'>
            {" "}
            <IoLogoYoutube className="w-12 h-12" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
