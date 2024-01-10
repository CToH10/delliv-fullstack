import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const user = localStorage.getItem("user");

  return user ? <Outlet /> : <Navigate to="/" />;
};
