import React from "react";
import { Layout } from "./layout";
import { LoginForm } from "../components/Forms/User/LoginForm";

export const LoginPage = () => {
  return (
    <Layout>
      <div className="w-4/5 h-[160px] m-auto flex flex-col items-center justify-center mt-[50px] scrollbar">
        <LoginForm />
      </div>
    </Layout>
  );
};
