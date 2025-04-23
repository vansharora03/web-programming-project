"use client";
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
  const [email, setEmail] = useState("");
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
          setEmail(userEmail);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const res = await fetch("/api/user/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: newEmail }),
    });

    const data = await res.json();

    if (res.ok) {
      setEmail(newEmail);
      localStorage.setItem("email", newEmail);
      setMessage("Email updated successfully.");
    } else {
      setMessage(data.error || "Failed to update email.");
    }

    onChange({ email });
    setEmail("");
  };

  return isLoggedIn ? (
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
                  value={email}
                  required
                />
                <input
                  className="w-full px-4 py-2 placeholder:text-gray-500"
                  type="email"
                  placeholder="Change your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
<<<<<<< Updated upstream
              <Button text="Save Changes" className={styles.button} />
              {message && <p className="text-sm mt-2">{message}</p>}
=======
              <Button
                text="Save Changes"
                className={styles.button}
                type="submit"
              />
              {typeof message === "string" && (
                <p className="text-sm mt-2">{message}</p>
              )}
>>>>>>> Stashed changes
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    <h1 className={styles.notloggedin}>Please log in to view your profile</h1>
  );
};
export default Profile;
