import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';

function Login({ setUser, switchToRegister, setError }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [localError, setLocalError] = useState('');
  
    console.log('Login component rendered'); // Add this line
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Login attempt with email:', email); // Add this line
      setLocalError('');
      try {
        const user = await signIn({
          username: email,
          password,
        });
        console.log('Login successful:', user); // Add this line
        setUser(user);
      } catch (error) {
        console.error('Login error:', error); // Add this line
        if (error.name === 'NetworkError') {
          setError('Network error. Please check your internet connection and try again.');
        } else {
          setLocalError(error.message);
        }
      }
    };
  
    // Rest of the component remains the same

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {localError && <p className="text-red-500 mb-4">{localError}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={switchToRegister}
            type="button"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

