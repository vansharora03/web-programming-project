// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">
        Oops, our bad. This page has zero (0) tasty recipes!
      </p>
      <Link href="/">
        <p>Go back home</p>
      </Link>
    </div>
  );
}
