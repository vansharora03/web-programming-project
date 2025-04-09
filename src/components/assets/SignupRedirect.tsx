"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Signup from "./Signup";
import SignupPage from "@/app/signup/page";

const SignupRedirect = () => {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/signup");
  };

  return (
    <span onClick={handleSignupClick} style={{ cursor: "pointer" }}>
      Sign up
    </span>
  );
};

export default SignupRedirect;
