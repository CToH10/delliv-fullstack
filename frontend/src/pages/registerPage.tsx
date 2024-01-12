import React from "react";
import { RegisterForm } from "../components/Forms/User/Register";
import { Layout } from "./layout";
import { LoginOrRegisterBox } from "../components/LoginOrRegister";
import { ContentDiv } from "../components/ContentDiv";

export const RegisterPage = () => {
  return (
    <Layout>
      <LoginOrRegisterBox isLogin={false} />
      <ContentDiv>
        <RegisterForm />
      </ContentDiv>
    </Layout>
  );
};
