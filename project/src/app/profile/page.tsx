"use client";

import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div>
      <Profile
        onChange={(user) => {
          console.log("User updated:", user);
        }}
      />
    </div>
  );
}
