import React from "react";
import { Header } from "../components/Header";
import { ModalBox } from "../components/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// import { Footer } from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const modalOpen = useSelector((state: RootState) => state.modal.modal);

  return (
    <>
      <Header />
      {children}
      {modalOpen && (
        <ModalBox/>
      )}
      {/* <Footer /> */}
    </>
  );
};
