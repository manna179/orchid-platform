import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { data } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

    const {SignUpUser} = useContext(AuthContext)
const [error,setError]= useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password,photo);
        
        if (!/[a-z]/.test(password)) {
          setError("password should have one lowercase");
          return;
        }
        if (!/[A-Z]/.test(password)) {
          setError("password should have one uppercase");
          return;
        }
        if (password.length < 6) {
          setError("password should be 6 character");
          return;
        }
        SignUpUser(email,password)
        .then(res=>{
            console.log(res.user);
            const signInTime = res?.user?.metadata?.lastSignInTime

            const newUser = {name,email,signInTime}
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
               if(data.insertedId){
                toast.success('user added in database')
               }
            })
        })
        .catch(err=>{
            console.log('error',err.message);
        })

    }


  

    return (
        <div className=" max-w-3xl mx-auto border m-2 rounded-lg">
        
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered "
              required
            />
          </div>
  
         
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="image"
              type="url"
              placeholder="Photo"
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
          <div className="form-control mt-6">
            <button  type="submit" className="btn text-xl bg-red-400">
             register
            </button>
          </div>
        </form>
  
        <Toaster />
       
      

      {
        error && toast.success('error happened')
      }
      </div>
      
    );

}
export default SignUp