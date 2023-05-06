import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register.page";
import LoginPage from "./pages/login.page";
import HomePage from "./pages/home.page"; // Import HomePage
import ForgotPasswordPage from "./pages/forgotPassword.page"; // Import ForgotPasswordPage

import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";
import Layout from "./components/CommonLayout";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/profile.page";
import RequireUser from "./components/Barrier";
import Unauthorized from "./pages/unauthorised";

function App() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        {/* Private and public routes */}
        {/* Roles in my CRM Role-Based Routing // authorization and authentication */}
        {/* // later we will get it from APIs */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />{" "}
          {/* Move the home page route */}
          <Route path="forgot-password" element={<ForgotPasswordPage />} />{" "}
          {/* Add this route */}
          <Route element={<RequireUser allowedRoles={["admin", "user"]} />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="verifyemail">
          <Route path=":verificationCode" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
