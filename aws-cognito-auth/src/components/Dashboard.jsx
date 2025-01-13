import React from 'react';

function Dashboard({ user, signOut }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.attributes.email}!</h1>
        <p className="mb-4">You are now logged in to the dashboard.</p>
        <button
          onClick={signOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

