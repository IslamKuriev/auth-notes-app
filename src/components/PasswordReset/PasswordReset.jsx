import { PasswordResetForm } from '@userfront/toolkit';
import React from 'react';
import styles from './password.module.css';
const PasswordReset = () => {
  return (
    <div>
      <h2 className={styles.title}>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
};

export default PasswordReset;
