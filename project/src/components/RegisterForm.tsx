// components/Auth/Signup.tsx
import React, { useState, FormEvent } from "react";
import styles from './RegisterForm.module.css'
import Button from "./Button";
import Redirect from "./Redirect";

type SignupProps = {
  onSignup: (user: {
    username: string;
    email: string;
    password: string;
  }) => void;
};

const RegisterForm: React.FC<SignupProps> = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSignup({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Register
        <div className={styles.underline}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div>
            <p className={styles.text}>Email</p>
          </div>
          <div className={styles.input}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <p className={styles.text}>Password</p>
          </div>
          <div className={styles.input}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.submitcontainer}>
            <Button className={styles.button} text="Sign Up" />
          </div>
          <div className={styles.text}>
            <Redirect to="/loginpage" text="Already Have An accounrt?" />
          </div>
        </div>

      </form>
    </div>
  );
};

export default RegisterForm;