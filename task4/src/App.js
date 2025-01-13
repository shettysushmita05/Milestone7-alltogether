import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import UserDashboard from './components/UserDashboard';

import Layout from './components/Layout';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return element;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={
                  <Layout>
                    <UserDashboard />
                  </Layout>
                }
                allowedRoles={['admin', 'manager', 'user']}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                element={
                  <Layout>
                    <AdminDashboard />
                  </Layout>
                }
                allowedRoles={['admin']}
              />
            }
          />
          <Route
            path="/manager"
            element={
              <ProtectedRoute
                element={
                  <Layout>
                    <ManagerDashboard />
                  </Layout>
                }
                allowedRoles={['admin', 'manager']}
              />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

