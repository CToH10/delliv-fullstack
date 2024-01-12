import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { HomePage } from "../pages/homePage";
import { RegisterPage } from "../pages/registerPage";
import { ApiProvider } from "../context/apiContext";
import { LoginPage } from "../pages/loginPage";
import { ProfilePage } from "../pages/profilePage";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ApiProvider />}>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
