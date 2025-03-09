import React from "react";

function Settings({ user, toggleDarkMode }) {
  return (
    <div className="card p-4 shadow-lg bg-white text-dark rounded">
      <h2>Settings</h2>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label ms-2">Enable Dark Mode</label>
      </div>
    </div>
  );
}

export default Settings;
