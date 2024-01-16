import React from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
}

export const ModalBox = ({ children }: ModalProps) => {
  return (
    <section
      className="modalBox"
      onClick={(e) => {
        console.log(e.target === e.currentTarget && "fechar");
      }}
    >
      <section className="modalContent">
        <button
          className="absolute top-4 right-4 btn-small btn-brand1"
          onClick={() => console.log("fechar")}
        >
          {<IoClose />}
        </button>
        {children}
      </section>
    </section>
  );
};
