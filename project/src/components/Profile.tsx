"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Profile.module.css";
import Avatar from "@/assets/avatar.jpg";

const Profile = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handlePasswordUpdate = () => {
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      setSuccess("");
      return;
    }

    setSuccess("Password updated successfully!");
    setError("");
    setNewPassword("");
  };

  return (
    <>
      <div className={styles.top}>
        <Image src={Avatar} alt="Avatar" className={styles.image} />
      </div>
      <div>
        <div className={styles.card}>
          <div className={styles.header}>User Profile</div>
          <div className={styles.settings}>SETTINGS</div>
          <div>
            <p className={styles.text}>Email</p>
            <p className={styles.text}>Password</p>

            {/* Password Update Section */}
            <div className={styles.passwordSection}>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={handlePasswordChange}
                className={styles.passwordInput}
              />
              <button
                onClick={handlePasswordUpdate}
                className={styles.updateButton}
              >
                Update Password
              </button>

              {error && <p className={styles.error}>{error}</p>}
              {success && <p className={styles.success}>{success}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
