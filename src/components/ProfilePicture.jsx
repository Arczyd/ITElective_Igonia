import React from "react";

function ProfilePicture() {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div
        className="rounded-circle border border-primary d-flex align-items-center justify-content-center"
        style={{ width: 120, height: 120 }}
      >
        <span className="text-primary fw-bold">No Image</span>
      </div>
    </div>
  );
}

export default ProfilePicture;
