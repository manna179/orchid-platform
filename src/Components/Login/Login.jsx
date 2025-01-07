import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import login from '../../assets/lottie/login.json'
import { IoIosHome } from "react-icons/io";
import { IoReturnUpBackSharp } from "react-icons/io5";

const Login = () => {
  const { signInUser, setUser, handleGoogleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        if (location.state.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleLoginWithGoogle = () => {
    handleGoogleLogin()
      .then((res) => {
        navigate('/')
       
      })
      .catch((err) => {
        const result = err.message;
        setError(result);
      });
  };
  return (
    <div className=" w-11/12 flex items-center bg-slate-100 p-2 mx-auto border gap-10 rounded-lg">
      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="text-3xl font-bold text-center">Login Now!</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered "
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="text"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>

        <p>Forget password?</p>

        <div className="form-control mt-6">
          <button
            onClick={signInUser}
            type="submit"
            className="btn text-xl bg-red-400"
          >
            Login
          </button>

          <p className="my-4 text-center  ">
            Have no account?{" "}
            <Link to="/signUp" className="btn btn-link text-red-500 ">
              Sign Up
            </Link>
          </p>
        </div>

       

       
        <Toaster></Toaster>
        <div className="text-center">
        <button
        type="button"
        onClick={handleLoginWithGoogle}
        className="btn bg-red-400  btn-wide"
      >
        Login With Google
      </button>
     <div className="text-2xl flex justify-end"> <Link to='/' className="flex items-center gap-2 text-red-400"> <IoReturnUpBackSharp /> <IoIosHome /></Link></div>
        </div>

        {error && toast.error(error)}

<Navigate state={location.pathname}></Navigate>
      </form>
      <div className="w-full">
        <Lottie animationData={login}></Lottie>
      </div>
      
    
    </div>
  );
};

export default Login;
