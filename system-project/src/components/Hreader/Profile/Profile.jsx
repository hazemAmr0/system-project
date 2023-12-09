// Profile.js
import React, { useState } from "react";
import "./Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = ({ setShowProfile }) => {
  const initialUserData = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    // Add other user data as needed
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdatePhoto = () => {
    console.log("Updating profile photo...");
  };

  const handleUpdateInfo = () => {
    console.log("Updating user information...", userData);
    // You can send a request to update the user information to the server here
    // Assume a successful update for this example
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="profile-modal">
      <div className="profile-header">
        <h2>Profile</h2>
        <button onClick={() => setShowProfile(false)}>Close</button>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <AccountCircleIcon fontSize="large" />
          <button onClick={handleUpdatePhoto}>Update Photo</button>
        </div>
        <div className="user-details">
          {isEditing ? (
            <form>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </div>
              {/* Add other user information fields here */}
            </form>
          ) : (
            <>
              <div>
                <strong>Username:</strong> {userData.username}
              </div>
              <div>
                <strong>Email:</strong> {userData.email}
              </div>
              {/* Add other user information fields here */}
            </>
          )}
          <button
            onClick={isEditing ? handleUpdateInfo : () => setIsEditing(true)}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
