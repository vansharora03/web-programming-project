"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Profile.module.css";
import Avatar from "@/assets/avatar.jpg";
import { useState, useEffect } from "react";
import { FormEvent } from "react";
import Button from "./Button";

type ProfileProps = {
  onChange: (user: { email: string }) => void;
};

const Profile: React.FC<ProfileProps> = ({ onChange }) => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [storedEmail, setStoredEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const interval = setInterval(() => {
      if (!token) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        const userEmail = localStorage.getItem("email");
        if (userEmail) {
          setStoredEmail(userEmail);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("User is not authenticated.");
      return;
    }

    if (currentEmail !== storedEmail) {
      setMessage("Current email does not match our records.");
      return;
    }

    try {
      const res = await fetch("/backend/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentEmail, newEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        setStoredEmail(newEmail);
        setCurrentEmail("");
        setNewEmail("");
        localStorage.setItem("email", newEmail);
        setMessage("Email updated successfully.");
        onChange({ email: newEmail });
      } else {
        setMessage(data.error || "Failed to update email.");
      }
    } catch (err) {
      setMessage("An unexpected error occurred.");
      console.log(err);
    }

    //setCurrentEmail("");
  };

  return (
    <>
      <div className={styles.top}>
        <Image src={Avatar} alt="Avatar" className={styles.image} />
      </div>
      <div>
        <div className={styles.card}>
          <div className={styles.header}>User Profile</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <div>
                <p className={styles.text}>Email</p>
              </div>
              <div className={styles.input}>
                <input
                  className="w-full px-4 py-2 placeholder:text-gray-500"
                  type="email"
                  placeholder="Enter your current email"
                  value={currentEmail}
                  onChange={(e) => setCurrentEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full px-4 py-2 placeholder:text-gray-500"
                  type="email"
                  placeholder="Change your email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                />
              </div>
              <Button
                text="Save Changes"
                className={styles.button}
                type="submit"
              />
              {message && <p className="text-sm mt-2">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
