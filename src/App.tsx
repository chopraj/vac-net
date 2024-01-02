import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardLayout from "./layouts/DashboardLayout";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Beneficiaries from "./pages/beneficiaries/beneficiaries";
import Login from "./pages/Auth/Login";
// import PrivateRoute from "./pages/Auth/PrivateRoute";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/app/dashboard" />} />
          <Route path="/app/dashboard" element={<div>Dashboard</div>} />
          <Route path="/app/beneficiaries" element={<Beneficiaries />} />
          <Route path="app/loans" element={<div>Loans</div>} />
          <Route path="app/sessions" element={<div>Sessions</div>} />
          <Route path="app/staff" element={<div>Staff</div>} />
          <Route path="app/support" element={<div>Support</div>} />
          <Route path="app/settings" element={<div>Settings</div>} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </>,
  ),
);

const App: React.FC = () => (
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
