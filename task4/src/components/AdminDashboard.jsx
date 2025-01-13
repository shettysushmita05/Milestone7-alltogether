import React from 'react';
import styles from './Dashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin dashboard. Here you can manage users and system settings.</p>
      <ul>
        <li>Manage Users</li>
        <li>System Configuration</li>
        <li>View Logs</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;

