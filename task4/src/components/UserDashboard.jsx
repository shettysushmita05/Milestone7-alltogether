import React from 'react';
import styles from './Dashboard.module.css';

const UserDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>User Dashboard</h2>
      <p>Welcome to your dashboard. Here you can view your tasks and personal information.</p>
      <ul>
        <li>My Tasks</li>
        <li>Personal Information</li>
        <li>Messages</li>
      </ul>
    </div>
  );
};

export default UserDashboard;

