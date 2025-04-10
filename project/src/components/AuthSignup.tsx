// components/Auth/Signup.tsx
import React, { useState, FormEvent } from "react";
import "./AuthSignup.css";
import Button from "./Button";
import Redirect from "./Redirect";

type SignupProps = {
  onSignup: (user: {
    username: string;
    email: string;
    password: string;
  }) => void;
};

const AuthSignup: React.FC<SignupProps> = ({ onSignup }) => {
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
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src="/images/person-icon.png" alt="Username icon" />
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <img src="/images/email-icon.png" alt="Email icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <img src="/images/password-icon.png" alt="Password icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <Redirect to="/login" text="Login" />

        <Button type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default AuthSignup;