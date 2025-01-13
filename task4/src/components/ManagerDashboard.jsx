import React from 'react';
import styles from './Dashboard.module.css';

const ManagerDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Manager Dashboard</h2>
      <p>Welcome to the manager dashboard. Here you can oversee projects and team performance.</p>
      <ul>
        <li>Project Overview</li>
        <li>Team Performance</li>
        <li>Resource Allocation</li>
      </ul>
    </div>
  );
};

export default ManagerDashboard;

