import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// Mock user data
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'manager', password: 'manager123', role: 'manager' },
  { username: 'user', password: 'user123', role: 'user' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser({ username: foundUser.username, role: foundUser.role });
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

