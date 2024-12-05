import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';
  export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const provider = new GoogleAuthProvider()

const SignUpUser = (email,Password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,Password)
}

const signInUser = (email,Password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,Password)
}
const handleGoogleLogin=()=>{
    setLoading(true)
return signInWithPopup(auth,provider)
}

const handleSignOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

    const userInfo = {
        user,
        SignUpUser,
        signInUser,
        setUser,
        handleGoogleLogin,
        handleSignOut
       
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  
          if(currentUser){
  
            setUser(currentUser);
          }else{
            setUser(null)
          }
          setLoading(false)
  
  
          return () => {
            unSubscribe();
          };
        });
      }, []);

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;