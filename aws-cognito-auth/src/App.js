// import React, { useState, useEffect } from 'react';
// import { Amplify } from 'aws-amplify';
// import { signOut, getCurrentUser } from 'aws-amplify/auth';
// //import awsconfig from './aws-exports';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import awsConfig from './aws-exports';

// // Amplify.configure({
// //   Auth:{
  
// //       UserPoolId: awsconfig.Auth.userPoolId,
// //       UserPoolWebClientId: awsconfig.Auth.userPoolWebClientId,
// //       Region: awsconfig.Auth.region,
      
// //     }
// //   }

// // );

// Amplify.configure(awsConfig); 


// function App() {
//   const [user, setUser] = useState(null);
//   const [authState, setAuthState] = useState('login');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     checkUser();
//   }, []);

//   async function checkUser() {
//     try {
//       const user = await getCurrentUser();
//       setUser(user);
//     } catch (error) {
//       if (error.message !== 'The user is not authenticated') {
//         setError(`Authentication check failed: ${error.message}`);
//       }
//       setUser(null);
//     }
//   }
  
//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       setUser(null);
//       setAuthState('login');
//     } catch (error) {
//       setError(`Error signing out: ${error.message}`);
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded shadow-md w-96">
//           <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
//           <p>{error}</p>
//           <button
//             className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             onClick={() => setError(null)}
//           >
//             Dismiss
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (user) {
//     return <Dashboard user={user} signOut={signOut} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       {authState === 'login' ? (
//         <Login setUser={setUser} switchToRegister={() => setAuthState('register')} setError={setError} />
//       ) : (
//         <Register switchToLogin={() => setAuthState('login')} setError={setError} />
//       )}
//     </div>
//   );
// }

// export default App;






import React, { useState, useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from './aws-exports';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

Amplify.configure(awsConfig); // Configure Amplify

function App() {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState('login');
  const [error, setError] = useState(null);

  // Check if user is authenticated on mount
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (err) {
      if (err !== 'not authenticated') {
        setError(`Authentication check failed: ${err.message}`);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      setAuthState('login');
    } catch (err) {
      setError(`Sign out failed: ${err.message}`);
    }
  };

  // Render error message
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
          <p>{error}</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => setError(null)}
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }

  // Render dashboard if authenticated
  if (user) {
    return <Dashboard user={user} signOut={handleSignOut} />;
  }

  // Render login or register form based on auth state
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {authState === 'login' ? (
        <Login setUser={setUser} switchToRegister={() => setAuthState('register')} setError={setError} />
      ) : (
        <Register switchToLogin={() => setAuthState('login')} setError={setError} />
      )}
    </div>
  );
}

export default App;
