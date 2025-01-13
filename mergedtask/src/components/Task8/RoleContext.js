import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  const loginAs = (newRole) => {
    setRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, loginAs }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleContext.Provider");
  }
  return context;
};
