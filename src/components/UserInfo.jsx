import React from "react";

function UserInfo({ name }) {
  return (
    <h3 className="text-center mt-3">
      User Name: <span className="text-primary">{name}</span>
    </h3>
  );
}

export default UserInfo;
