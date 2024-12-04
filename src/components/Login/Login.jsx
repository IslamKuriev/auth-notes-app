import Userfront, { LoginForm } from '@userfront/toolkit';
import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <h2 className={styles.title}>Login</h2>
      <LoginForm />
      <button className={styles.btnNavigate} onClick={Userfront.logout}>
        Logout
      </button>
      <Link to={'/dashboard'}>
        <button className={styles.btnNavigate}>Dashboard</button>
      </Link>
    </div>
  );
};

export default Login;
