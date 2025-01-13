import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {user?.role === 'admin' && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
            {(user?.role === 'admin' || user?.role === 'manager') && (
              <li>
                <Link to="/manager">Manager</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className={styles.userInfo}>
          {user && (
            <>
              <span>Welcome, {user.username} ({user.role})</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;

