import React from "react";
import { Navigate } from "react-router-dom";
import  { useRole } from "../Task8/RoleContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { role } = useRole();
  console.log("Role in ProtectedRoute:", role);

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/task8/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
