"use client";

import React from "react";
import Login from "@/components/Login";

const handleLogin = (user) => {
  console.log("User logged in:", user.email);
};

export default function LoginPage() {
  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}