import React from "react";
import { RegisterForm } from "../components/Forms/User/Register";
import { Layout } from "./layout";
import { LoginOrRegisterBox } from "../components/LoginOrRegister";

export const RegisterPage = () => {
  return (
    <Layout>
      <LoginOrRegisterBox isLogin={false} />
      <div className="w-4/5 m-auto flex flex-col items-center justify-center mt-[35px] scrollbar">
        <RegisterForm />
      </div>
    </Layout>
  );
};
