"use client";

import React from "react";
import RegisterForm from "@/components/RegisterForm";

const handleSignup = async (user) => {
  console.log("User signed up:", user.email);

  try {
    const response = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Signup successful:", data);
    } else {
      const errorData = await response.json();
      console.error("Signup failed:", errorData.message);
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

export default function SignupPage() {
  return (
    <div>
      <RegisterForm onSignup={handleSignup} />
    </div>
  );
}
