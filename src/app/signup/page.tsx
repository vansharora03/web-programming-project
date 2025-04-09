"use client";

import React from "react";
import "../../App.css";
import Signup from "@/components/assets/Signup";
import Navbar from "@/components/assets/Navbar";

const handleSignup = (user) => {
  console.log("User signed up:", user.email);
};

export default async function SignupPage() {
  return (
    <div>
      <Navbar />
      <Signup onSignup={handleSignup} />
    </div>
  );
}
