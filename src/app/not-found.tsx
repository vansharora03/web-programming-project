import React from "react";

export default async function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center text-black">
        <h2 className="text-black text-2xl font-bold mb-4">Not Found</h2>
        <p className="text-black mb-2">Could not find requested page</p>
      </div>
    </div>
  );
}
