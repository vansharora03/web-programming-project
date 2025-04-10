"use client";

import React from "react";
import Signup from "@/components/AuthSignup";


const handleSignup = (user) => {
  console.log("User signed up:", user.email);
};

export default  function SignupPage() {
  return (
    <div>
      <Signup onSignup={handleSignup} />
    </div>
  );
}