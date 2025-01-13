import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/");
      } else {
        console.log("User Details:", currentUser); // Debugging user object
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);
  

  return (
    <div className="profile-container">
      {user ? (
        <>
          {/* Display the user's profile picture or a fallback image */}
          <img
  src={user?.photoURL}
  alt={user?.displayName || "Profile Picture"}
  style={{
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover", // Ensures the image fits within the circular frame
    marginBottom: "20px",
  }}
  onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "https://via.placeholder.com/150"; // Fallback image
  }}
/>

          <h2>Welcome, {user.displayName || "User"}</h2>
          <p>Email: {user.email}</p>
          <button onClick={() => auth.signOut()}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
