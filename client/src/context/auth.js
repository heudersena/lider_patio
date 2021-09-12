import React, { createContext, useContext, useState, useEffect } from 'react';
import api from "../services/api"

const AuthContext = createContext({});

const AuthProvaider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(true);

  useEffect(() => {
    console.log("atualizando...");
  }, [isLoggedIn])

  useEffect(() => {
    const isLoginLocalStorage = localStorage.getItem("$LiderPatioJWT") || null;
    if (isLoginLocalStorage) {
      api.defaults.headers.authorization = `Bearer ${isLoginLocalStorage}`;
      setIsLoggedIn(true)
    }
    setInit(false)

  }, [isLoggedIn])

  const singin = (token) => {
    localStorage.setItem("$LiderPatioJWT", token);
    api.defaults.headers.authorization = `Bearer ${token}`;
    setIsLoggedIn(true)
  }

  const logount = () => {
    localStorage.removeItem("$LiderPatioJWT")
    setIsLoggedIn(false)
  }


  return (
    <AuthContext.Provider
      value={{ isLoggedIn, init, setIsLoggedIn, singin, logount }}>
      {children}
    </AuthContext.Provider >
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('o userAuth não foi iniciado/usado');
  }
  return context;
}

export { AuthProvaider, useAuth };