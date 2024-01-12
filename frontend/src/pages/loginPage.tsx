import React from "react";
import { Layout } from "./layout";
import { LoginForm } from "../components/Forms/User/LoginForm";
import { LoginOrRegisterBox } from "../components/LoginOrRegister";
import { ContentDiv } from "../components/ContentDiv";

export const LoginPage = () => {
  return (
    <Layout>
      <LoginOrRegisterBox isLogin />
      <ContentDiv>
        <LoginForm />
      </ContentDiv>
    </Layout>
  );
};
