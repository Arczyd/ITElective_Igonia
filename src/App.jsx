import React, { useState, useCallback } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  const [user, setUser] = useState({
    name: "Julianne Igonia",
    email: "Igonia@gmail.com",
    password: "123456",
    profilePic: "",
    settings: { darkMode: false },
  });

  const toggleDarkMode = useCallback(() => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: { darkMode: !prevUser.settings.darkMode },
    }));
  }, []);

  return (
    <div
      className={`min-vh-100 ${
        user.settings.darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <nav
        className={`navbar navbar-expand-lg ${
          user.settings.darkMode
            ? "bg-dark navbar-dark"
            : "bg-light navbar-light"
        } p-3`}
      >
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            IgoniaApp
          </Link>

          <div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route
            path="/settings"
            element={<Settings user={user} toggleDarkMode={toggleDarkMode} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
