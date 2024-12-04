import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
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

    const userInfo = {
        user,
        SignUpUser,
        signInUser,
        setUser,
        handleGoogleLogin
       
    }
    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;