import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  // Login handler
  const login = async (loginFn, credentials) => {
    try {
      const { token } = await loginFn(credentials);
      localStorage.setItem('token', token);
      setUser({ token });
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Login failed');
    }
  };

  // Register handler
  const register = async (registerFn, userDetails) => {
    try {
      await registerFn(userDetails);
      navigate('/login'); // Redirect to login after successful registration
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Registration failed');
    }
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

 