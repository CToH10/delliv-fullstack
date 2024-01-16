import React from "react";
import { EditUserForm } from "../../Forms/User/EditUser";

export const ModalEditUser = () => {
  return (
    <section className="modalContent">
        <h3 className="text-brand-1 text-heading4 font-bold w-full text-center">
        Editar usuário
      </h3>
      <EditUserForm />
    </section>
  );
};
