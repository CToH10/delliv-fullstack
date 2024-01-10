import React from "react";
import { RegisterForm } from "../components/Forms/User/Register";
import { Layout } from "./layout";

export const RegisterPage = () => {
  return (
    <Layout>
      <div className="w-4/5 h-[160px] m-auto flex flex-col items-center justify-center mt-[505px] scrollbar">
        <RegisterForm />
      </div>
    </Layout>
  );
};
