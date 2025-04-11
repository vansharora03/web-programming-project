
import React, { useState } from "react";
import styles from './RegisterForm.module.css'
import Button from "./Button";
import Redirect from "./Redirect";

const LoginSignup = () => {

    const [action, setAction] = useState();
    const [formData, setFormData] = useState({ username: "", email: "", password: ""});

  return (
    
    <div className={styles.container}>
      <div className={styles.header}> Sign In
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
      <div>
            <p className={styles.text}>Email</p>
          </div>
        <div className={styles.input}>
          <input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value })} />
        </div>
        <div>
            <p className={styles.text}>Password</p>
          </div>
        <div className={styles.input}>
          <input type="password" placeholder="Enter your password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value })} />
        </div>
        <div className='cursor-pointer text-white'>
        <span>Forgot Password?</span>
      </div>
        <div className={styles.submitcontainer}>
      <div className={styles.submitcontainer}>
            <Button className={styles.button} text="Sign In" />
          </div>
          <div className={styles.text}>
            <Redirect to="/register" text="Don't Have An Account?" />
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default LoginSignup;
