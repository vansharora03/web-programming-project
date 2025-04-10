
import React, { useState } from "react";
import "./Signup.css";
import person_icon from "../../resources/person-icon.png";
import email_icon from "../../resources/email-icon.png";
import password_icon from "../../resources/password-icon.png";

const LoginSignup = () => {

    const [action, setAction] = useState("Login");
    const [formData, setFormData] = useState({ username: "", email: "", password: ""});

  return (


    
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        
        {/* name */}
        <div className="input">
            <img src={person_icon} alt="Person icon" />
          <input type="text" placeholder="Enter your username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value })} />
        </div>

        {/* email */}
        <div className="input">
          <img src={email_icon} alt="Email icon" />
          <input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value })} />
        </div>

        {/* password */}
        <div className="input">
          <img src={password_icon} alt="Password icon" />
          <input type="password" placeholder="Enter your password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value })} />
        </div>
      </div>
      <div className="forgot-password">
        <span>Forgot Password?</span>
      </div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit" : "submit gray"}>Login</div>
        <div className={action === "Sign Up" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up")}>Sign Up</div>

      </div>
    </div>
  );
};

export default LoginSignup;
