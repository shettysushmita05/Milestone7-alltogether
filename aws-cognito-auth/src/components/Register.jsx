// import React, { useState } from 'react';
// import { signUp } from 'aws-amplify/auth';
// function Register({ switchToLogin, setError }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [localError, setLocalError] = useState('');

//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(password);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLocalError('');
  
//     if (password !== confirmPassword) {
//       setLocalError("Passwords don't match");
//       return;
//     }
  
//     if (!validatePassword(password)) {
//       setLocalError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
//       return;
//     }
  
//     try {
//       await signUp({
//         username: email,
//         password,
//         options: {
//           userAttributes: {
//             email
//           }
//         }
//       });
//       alert('Registration successful! Please check your email for the verification code.');
//       switchToLogin();
//     } catch (error) {
//       if (error.name === 'NetworkError') {
//         setError('Network error. Please check your internet connection and try again.');
//       } else {
//         setLocalError(error.message);
//       }
//     }
//   };
































// import React, { useState } from 'react';
// import { signUp } from 'aws-amplify/auth';
// // import { Amplify } from 'aws-amplify';
// // import awsConfig from '../aws-exports';
// function Register({ switchToLogin, setError }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [localError, setLocalError] = useState('');

//   // Add the missing validatePassword function
//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(password);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLocalError('');

//     try {
//       // First validate passwords match
//       if (password !== confirmPassword) {
//         setLocalError("Passwords don't match");
//         return;
//       }

//       // Then validate password strength
//       if (!validatePassword(password)) {
//         setLocalError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
//         return;
//       }

//       // Log the signup attempt
//       console.log('Attempting to sign up with:', { username: email });

//       // Attempt signup
//     //   const { isSignUpComplete, userId, nextStep } = await signUp({
//     //     username: email,
//     //     password,
//     //     options: {
//     //       userAttributes: {
//     //         email: email
//     //       },
//     //       autoSignIn: false // Explicitly disable auto sign-in
//     //     }
//     //   });
   
//       console.log("innnnn")
//     const { user } = await signUp({
//         email,
//         password,
//         attributes: {
//             email,
//          },
//           });

//           console.log(user);

//       // Log the signup response
//     //   console.log('Sign up response:', { isSignUpComplete, nextStep, userId });

//       // Handle successful signup
//     //   if (isSignUpComplete) {
//     //     alert('Registration successful! Please check your email for the verification code.');
//     //     switchToLogin();
//     //   } else {
//     //     console.log('Additional steps required:', nextStep);
//     //     // Handle any additional steps if needed
//     //     if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
//     //       alert('Please check your email for the verification code.');
//     //       switchToLogin();
//     //     }
//     //   }
//     } catch (error) {
//       // Enhanced error handling
//       console.error('Registration error:', error);
      
//       if (error.name === 'NetworkError') {
//         setError('Network error. Please check your internet connection and try again.');
//       } else if (error.name === 'UsernameExistsException') {
//         setLocalError('An account with this email already exists.');
//       } else if (error.name === 'InvalidPasswordException') {
//         setLocalError('Password does not meet requirements. Please try a different password.');
//       } else {
//         setLocalError(error.message || 'An error occurred during registration. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded shadow-md w-96">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {localError && <p className="text-red-500 mb-4">{localError}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
//             Confirm Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             id="confirm-password"
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Register
//           </button>
//           <button
//             className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//             onClick={switchToLogin}
//             type="button"
//           >
//             Back to Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Register;






























































import React, { useState } from 'react';
import   { Auth } from 'aws-amplify';

const Register = ({ switchToLogin, setError }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
  
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
  
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email, // Required for email-based sign-up
        },
      });
      alert('Registration successful! Please verify your email.');
      switchToLogin();
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Register
      </button>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <button
          type="button"
          className="text-blue-500 underline"
          onClick={switchToLogin}
        >
          Login here
        </button>
      </p>
    </form>
  );
};

export default Register;
