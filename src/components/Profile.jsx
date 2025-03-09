import React, { useState } from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";
import { Button } from "react-bootstrap";

function Profile({ user, setUser }) {
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="container p-4 bg-white shadow rounded">
      <h2 className="text-center mb-4 text-dark">Profile</h2>

      <div className="text-center">
        <ProfilePicture />
      </div>

      <div className="text-center">
        <h4 className="fw-bold text-dark">
          {user.name} <span className="fw-normal">Username</span>
        </h4>
        <p className="text-dark">
          {showEmail ? user.email : "**********"}{" "}
          <span className="fw-bold">Email</span>{" "}
          <Button
            variant="link"
            size="sm"
            onClick={() => setShowEmail(!showEmail)}
          >
            {showEmail ? "Hide" : "Show"}
          </Button>
        </p>
        <p className="text-dark">
          {showPassword ? user.password : "******"}{" "}
          <span className="fw-bold">Password</span>{" "}
          <Button
            variant="link"
            size="sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        </p>
      </div>
      
      <div className="mt-4">
        <label className="fw-bold text-dark">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="form-control mb-2"
        />

        <label className="fw-bold text-dark">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="form-control mb-2"
          placeholder="Enter your email"
        />

        <label className="fw-bold text-dark">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          className="form-control mb-3"
          placeholder="Enter your password"
        />

        <Button className="w-100 btn btn-primary">Save Changes</Button>
      </div>
    </div>
  );
}

export default Profile;
