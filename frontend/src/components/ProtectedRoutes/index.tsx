import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../store";

export const ProtectedRoutes = () => {
  const user = useSelector((state: RootState) => state.user.token);

  return user ? <Outlet /> : <Navigate to="/" />;
};
