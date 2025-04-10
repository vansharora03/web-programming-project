"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SignupRedirect = () => {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/loginpage");
  };

  return (
    <span onClick={handleSignupClick} style={{ cursor: "pointer" }}>
      Sign up
    </span>
  );
};

export default SignupRedirect;