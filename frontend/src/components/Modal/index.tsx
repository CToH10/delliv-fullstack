import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { RootState } from "../../store";
import { ModalCart } from "./ModalCart";
import { EditUserForm } from "../Forms/User/EditUser";

export const ModalBox = () => {
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.modal.content);

  let toRender;

  switch (content) {
    case "cart":
      toRender = <ModalCart />;
      break;
    case "editUser":
      toRender = <EditUserForm/>;
      break;
    default:
      <></>;
  }

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
        {toRender}
        {/* {children} */}
      </section>
    </section>
  );
};
