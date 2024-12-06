import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center text-5xl min-h-screen">
        <span className="loading loading-spinner text-warning p-12  "></span>
      </div>
    );
  }
  if(user&&user?.email){
    return children
  }
  return  <Navigate state={location.pathname} to="/login"></Navigate>

};
export default PrivateRoute;
