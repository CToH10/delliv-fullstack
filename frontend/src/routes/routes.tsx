import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { HomePage } from "../pages/homePage";
import { RegisterPage } from "../pages/registerPage";
import { ApiProvider } from "../context/apiContext";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ApiProvider />}>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
