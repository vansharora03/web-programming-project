import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import Button from "./Button";
import Redirect from "./Redirect";
import User from "./User";

const LoginSignup = () => {
  const [action, setAction] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSigninClick = async () => {
    try {
      const res = await fetch("/backend/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        const user = data.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (user) {
          console.log("Login successful:", user);
          alert("Login successful");
          // Call the onLogin function passed as a prop
          User(user);
        } else {
          console.error("Invalid login credentials");
          alert("Invalid login credentials");
        }
      } else {
        console.error("Login failed:", data.message);
        alert(data.message || "Invalid login credentials");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {" "}
        Sign In
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div>
          <p className={styles.text}>Email</p>
        </div>
        <div className={styles.input}>
          <input
            className="w-full px-4 py-2 placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <p className={styles.text}>Password</p>
        </div>
        <div className={styles.input}>
          <input
            className="w-full px-4 py-2 placeholder:text-gray-500"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className={styles.submitcontainer}>
          <div className={styles.submitcontainer}>
            <Button
              className={styles.button}
              text="Sign In"
              onClick={onSigninClick}
            />
          </div>
          <div className="cursor-pointer text-white">
            <Redirect to="/register" text="Don't have an account?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
