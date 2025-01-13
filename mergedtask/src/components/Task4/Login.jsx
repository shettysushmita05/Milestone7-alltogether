import React from "react";
// import { auth, googleProvider, facebookProvider } from "../firebase";
import { auth , googleProvider,facebookProvider } from "../../firebase"
 import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import "./Task4.css";

import "../../App.css";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/task4/profile");
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/profile");
    } catch (error) {
      alert("Facebook login failed: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
}

export default Login;
