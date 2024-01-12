import React from "react";
import { Layout } from "./layout";
import { LoginForm } from "../components/Forms/User/LoginForm";
import { LoginOrRegisterBox } from "../components/LoginOrRegister";

export const LoginPage = () => {
  return (
    <Layout>
      <LoginOrRegisterBox isLogin />
      <div className="w-4/5 m-auto flex flex-col items-center justify-center mt-[35px] scrollbar">
        <LoginForm />
      </div>
    </Layout>
  );
};
