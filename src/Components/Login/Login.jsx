import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const {signInUser,setUser,handleGoogleLogin} = useContext(AuthContext)
    const [error,setError]=useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(res=>{
            console.log(res.user);
            const user = res.user;
            setUser(user)
        })
        .catch(err=>{
            console.log(err);
            setError(err.message)
            
        })

    }

    const handleLoginWithGoogle=()=>{
        handleGoogleLogin()
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err.message);
            setError(err.message)
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

            <p>Have no account? <Link>Sign Up</Link></p>
          </div>



          <button onClick={handleLoginWithGoogle} className='btn btn-primary btn-wide'>Login With Google</button>



        </form>
  
      
       
      

      
      </div>
    );
};

export default Login;