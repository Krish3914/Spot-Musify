import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post("/api/auth/login", { email, password });
    setUser(response.data.user);
    // Store token in local storage
  };

  const register = async (username, email, password) => {
    await axios.post("/api/auth/register", { username, email, password });
    // Redirect to login
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
