import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const {signInUser,setUser,handleGoogleLogin} = useContext(AuthContext)
    const [error,setError]=useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       

        signInUser(email,password)
        .then(res=>{
            
            const user = res.user;
            setUser(user)
        })
        .catch(err=>{
           
            setError(err.message)
            
        })

    }

    const handleLoginWithGoogle=()=>{
        handleGoogleLogin()
        .then(res=>{
           
        })
        .catch(err=>{
            
            const result = (err.message) 
            setError(result)
        })
    }
    return (
        <div className=" max-w-3xl mx-auto border m-2 rounded-lg">
        
        <form onSubmit={handleSubmit} className="card-body">
         
  
         
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
            <button onClick={signInUser}  type="submit" className="btn text-xl bg-red-400">
             Login
            </button>

            <p className='mt-2'>Have no account? <Link to='/signUp' className='text-red-400'>Sign Up</Link></p>
          </div>



          <div className='flex justify-center'>
          <button onClick={handleLoginWithGoogle} className='btn bg-green-400  btn-wide'>Login With Google</button>
          </div>

      {
        error&& toast.success('please check again')
      }
  <Toaster></Toaster>
        </form>
  
      
        <Navigate state={location.pathname}></Navigate>
      

      
      </div>
    );
};

export default Login;