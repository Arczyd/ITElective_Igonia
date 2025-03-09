import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    settings: {
      darkMode: false,
    },
  });

  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: { ...prevUser.settings, darkMode: !prevUser.settings.darkMode },
    }));
  };

  return (
    <Router>
      <div className={user.settings.darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary p-2">
          <Link className="navbar-brand text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/profile">Profile</Link>
          <Link className="nav-link text-white" to="/settings">Settings</Link>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;