import React from "react";
import { Layout } from "./layout";
import { ProfileCard } from "../components/Profile/ProfileCard";
import { ContentDiv } from "../components/ContentDiv";
import { OrderList } from "../components/Profile/Orders";

export const ProfilePage = () => {
  return (
    <Layout>
      <ContentDiv className="gap-8">
        <ProfileCard />
        <OrderList />
      </ContentDiv>
    </Layout>
  );
};
