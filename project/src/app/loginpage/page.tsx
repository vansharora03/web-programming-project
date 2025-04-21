"use client";

import React, { use } from "react";
import LoginSignup from "@/components/LoginSignup";
import { useRouter } from "next/navigation";



export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (user) => {
    localStorage.setItem("email", user.email);
    router.push("/");
    console.log("Login successful:", user); 
  };

  return (
    <div>
      <LoginSignup onLogin={handleLogin} />
    </div>
  );
}