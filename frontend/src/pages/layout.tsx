import React from "react";
import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};
