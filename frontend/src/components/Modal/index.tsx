import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modalSlice";

interface ModalProps {
  children: React.ReactNode;
}

export const ModalBox = ({ children }: ModalProps) => {
  const dispatch = useDispatch();

  
  return (
    <section
      className="modalBox"
      onClick={(e) => {
        e.target === e.currentTarget && dispatch(closeModal());
      }}
      
    >
      <section className="modalContent">
        <button
          className="absolute top-4 right-4 btn-small btn-brand1"
          onClick={() => dispatch(closeModal())}
        >
          {<IoClose />}
        </button>
        {children}
      </section>
    </section>
  );
};
