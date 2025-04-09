"use client";

import React, { useState } from "react";
import "./Signup.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <nav className="nav-container">
      <p>
        <a href="../app/not-found">Home</a>
      </p>
    </nav>
  );
};

export default Navbar;
