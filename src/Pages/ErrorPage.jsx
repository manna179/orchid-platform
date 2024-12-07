import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    
      <div className="flex justify-center items-center border min-h-screen ">
       <div className="flex flex-col space-y-2">
       <h2 className="text-3xl font-bold ">Data Not Fount</h2>
       <p> <Link to='/'><button className="btn ">Back To Home</button></Link></p>
       </div>
      </div>
    
  );
};

export default ErrorPage;
