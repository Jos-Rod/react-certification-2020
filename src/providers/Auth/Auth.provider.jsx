import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, CURRENT_USER } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const lastAuthState = storage.get(CURRENT_USER);
    const isAuthenticated = lastAuthState != null;

    setAuthenticated(isAuthenticated);
  }, []);

  // const login = useCallback(() => {
  //   setAuthenticated(true);
  //   storage.set(CURRENT_USER, true);
  // }, []);

  const login = (user) => {
    setAuthenticated(true);
    storage.set(CURRENT_USER, user);
  }

  const getCurrentUser = () => {
    if (authenticated) {
      return storage.get(CURRENT_USER);
    }
    return null;
  }

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(CURRENT_USER, null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
