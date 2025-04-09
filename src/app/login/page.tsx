"use client";

import React from "react";
import "../../App.css";
import Login from "@/components/assets/Login";
import Navbar from "@/components/assets/Navbar";

const handleLogin = (user) => {
  console.log("User logged in:", user.email);
};

export default async function LoginPage() {
  return (
    <div>
      <Navbar />
      <Login onLogin={handleLogin} />
    </div>
  );
}
