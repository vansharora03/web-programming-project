"use client";

import React from "react";
import LoginSignup from "@/components/LoginSignup";

const handleLogin = (user) => {
  console.log("User logged in:", user.email);
};

export default function LoginPage() {
  return (
    <div>
      <LoginSignup onLogin={handleLogin} />
    </div>
  );
}