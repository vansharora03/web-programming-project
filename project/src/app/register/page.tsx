"use client";

import React from "react";
import RegisterForm from "@/components/RegisterForm";
import { useRouter } from "next/navigation";
type User = {
  email: string;
  password: string;
}


export default function SignupPage() {
  const router = useRouter();
  const handleSignup = async (user: User) => {
    // If user.email is not a valid email, show an alert and return
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("User signed up:", user.email);
  
    try {
      const response = await fetch("backend/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        alert("Signup successful");
        router.push("/loginpage"); // Redirect to login page after successful signup
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData.message);
        alert("Signup failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div>
      <RegisterForm onSignup={handleSignup} />
    </div>
  );
}
