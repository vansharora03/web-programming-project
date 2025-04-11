"use client";

import React from "react";
import RegisterForm from "@/components/RegisterForm";


const handleSignup = (user) => {
  console.log("User signed up:", user.email);
};

export default  function SignupPage() {
  return (
    <div>
      <RegisterForm onSignup={handleSignup} />
    </div>
  );
}