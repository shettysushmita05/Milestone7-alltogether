import React from "react";
// import { useRole } from "../../RoleContext";
import  { useRole } from "../Task8/RoleContext";
import { useNavigate } from "react-router-dom";

const Logins = () => {
  const { loginAs } = useRole();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    loginAs(role);
    if (role === "admin") {
      navigate("/task8/admin-dashboard");
    } else if (role === "manager") {
      navigate("/task8/manager-dashboard");
    } else if (role === "user") {
      navigate("/task8/user-dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("manager")}>Login as Manager</button>
      <button onClick={() => handleLogin("user")}>Login as User</button>
    </div>
  );
};

export default Logins;
