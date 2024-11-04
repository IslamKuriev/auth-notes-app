import  Userfront, { SignupForm } from '@userfront/toolkit';
import React from 'react';
import styles from './home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <h2 className={styles.title}>Home</h2>
        <SignupForm />
        <button className={styles.btnNavigate} onClick={Userfront.logout}>Logout</button>
        <Link to={'/dashboard'}><button className={styles.btnNavigate}>Dashboard</button></Link>
       </div>
    );
};

export default Home;