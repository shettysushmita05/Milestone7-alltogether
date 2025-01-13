import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleContextProvider } from "./components/Task8/RoleContext";
import Counter from "./components/Task6/Counter";
import TodoList from "./components/Task6/TodoList";
import ThemeToggle from "./components/Task6/ThemeToggle";
import Login from "./components/Task4/Login";
import Register from "./components/Task4/Register";
import Profile from "./components/Task4/Profile";
import Navbar from "./components/Task4/Navbar";
import ProtectedRoute from "./components/Task8/ProtectedRoute";
import AdminDashboard from "./components/Task8/AdminDashboard";
import ManagerDashboard from "./components/Task8/ManagerDashboard";
import UserDashboard from "./components/Task8/UserDashboard";
import Logins from "./components/Task8/Login";
import Task7Dashboard from "./components/Task7/Task7Dashboard";
import Loading from "./components/Task9/Loading";

// Lazy imports for task9
const Home = lazy(() => import('./components/Task9/Home'));
const SolarSystem = lazy(() => import('./components/Task9/SolarSystem'));
const DeepSpace = lazy(() => import('./components/Task9/DeepSpace'));

const App = () => {
  return (
    <RoleContextProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Welcome to My Task</h2>
                </>
              }
            />
            <Route path="/task6/counter" element={<Counter />} />
            <Route path="/task6/todolist" element={<TodoList />} />
            <Route path="/task6/theme-toggle" element={<ThemeToggle />} />
            <Route path="/task4/login" element={<Login />} />
            <Route path="/task4/register" element={<Register />} />
            <Route path="/task4/profile" element={<Profile />} />
            <Route path="/task7" element={<Task7Dashboard />} />
            <Route path="/task8/login" element={<Logins />} />
            <Route
              path="/task8/admin-dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/task8/manager-dashboard"
              element={
                <ProtectedRoute allowedRoles={["manager"]}>
                  <ManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/task8/user-dashboard"
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            {/* Task 9 */}
            <Route path="/task9" element={<Home />} />
            <Route path="/solar-system" element={<SolarSystem />} />
            <Route path="/deep-space" element={<DeepSpace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RoleContextProvider>
  );
};

export default App;

