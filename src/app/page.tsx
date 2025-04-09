"use client";

import React from "react";
import Login from "@/components/assets/Login";
import Navbar from "@/components/assets/Navbar";

export default function Page() {
  const handleLogin = (user) => {
    console.log("User logged in:", user.email);
  };

  return (
    <div>
      <Navbar />
      <Login onLogin={handleLogin} />
    </div>
  );
}
