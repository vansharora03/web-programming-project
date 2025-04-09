"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LoginRedirect = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <span onClick={handleLoginClick} style={{ cursor: "pointer" }}>
      Login
    </span>
  );
};

export default LoginRedirect;
