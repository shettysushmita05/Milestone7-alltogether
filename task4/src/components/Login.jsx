// import React from "react";
// import { auth, googleProvider, facebookProvider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       navigate("/profile");
//     } catch (error) {
//       alert("Google login failed: " + error.message);
//     }
//   };

//   const handleFacebookLogin = async () => {
//     try {
//       await signInWithPopup(auth, facebookProvider);
//       navigate("/profile");
//     } catch (error) {
//       alert("Facebook login failed: " + error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <button onClick={handleGoogleLogin}>Login with Google</button>
//       <button onClick={handleFacebookLogin}>Login with Facebook</button>
//     </div>
//   );
// }

// export default Login;














import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const success = await login(username, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

