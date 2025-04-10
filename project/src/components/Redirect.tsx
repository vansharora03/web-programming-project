"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface RedirectProps {
  to: string;
  text: string;
}

const Redirect = ({ to, text }: RedirectProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <span
      onClick={handleClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        margin: "10px auto",
        alignItems: "center",
        color: "gray",
      }}
    >
      {text}
    </span>
  );
};

export default Redirect;