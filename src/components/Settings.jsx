import React from "react";

function Settings({ user, toggleDarkMode }) {
  return (
    <div>
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        Dark Mode
      </label>
    </div>
  );
}

export default Settings;