import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase.init';
  export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);

const SignUpUser = (email,Password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,Password)
}

    const userInfo = {
        user,
        SignUpUser,
       
    }
    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;