// components/Auth/Login.tsx

"use client";

import React, { useState, FormEvent } from "react";
import "./Signup.css";
import Button from "./Button";
import SignupRedirect from "./SignupRedirect";
import Redirect from "./Redirect";

type LoginProps = {
  onLogin: (credentials: { email: string; password: string }) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
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

        <Redirect to="/forgot-password" text="Forgot Password?" />

        <Redirect to="/signup" text="Sign up" />

        <Button type="submit" text="Login" />
      </form>
    </div>
  );
};

export default Login;
