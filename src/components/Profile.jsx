import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Profile({ user, setUser }) {
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle Input Changes (Name, Email, Password)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle Profile Picture Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result, // Save the image as base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container p-4 bg-white shadow rounded">
      <h2 className="text-center mb-4 text-dark">Profile</h2>

      {/* Profile Picture */}
      <div className="text-center">
        <label htmlFor="profilePicInput" className="d-block">
          <div
            className="rounded-circle border border-primary d-flex align-items-center justify-content-center mx-auto"
            style={{
              width: 120,
              height: 120,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span className="text-primary fw-bold">Upload</span>
            )}
          </div>
        </label>
        <input
          type="file"
          id="profilePicInput"
          accept="image/*"
          onChange={handleImageUpload}
          className="d-none"
        />
      </div>

      {/* User Info */}
      <div className="text-center mt-3">
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

      {/* Editable Fields */}
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
