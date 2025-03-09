import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ user, setUser }) {
  const handleNameChange = (event) => {
    setUser((prevUser) => ({ ...prevUser, name: event.target.value }));
  };

  return (
    <div>
      <h2>Profile</h2>
      <ProfilePicture />
      <UserInfo name={user.name} />
      <label>Name:</label>
      <input
        type="text"
        value={user.name}
        onChange={handleNameChange}
        className="form-control"
      />
    </div>
  );
}

export default Profile;