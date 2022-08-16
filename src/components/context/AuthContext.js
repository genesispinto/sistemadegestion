import React, { createContext, useState, useEffect} from 'react';
import {auth} from '../../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [buyer,setBuyer]= useState({})
  //const [user,setUser]= useState()
  const cargabuyer = (datos)=> setBuyer({...datos})


  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, [])


  const login = (email, password) => {
  
    return  auth.signInWithEmailAndPassword(email, password);
  }

  const logout = async() =>{
    console.log('sesion cerrada')
    return await auth.signOut();
    
  } 

  return (
    <AuthContext.Provider value={{cargabuyer, buyer,logout,login,currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

