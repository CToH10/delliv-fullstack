import React from "react";
import { Header } from "../components/Header";
import { ModalBox } from "../components/Modal";
// import { Footer } from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <ModalBox>
        <li></li>
      </ModalBox>
      {/* <Footer /> */}
    </>
  );
};
