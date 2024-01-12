import React from "react";
import { Layout } from "./layout";
import { ProfileCard } from "../components/Profile/ProfileCard";
import { ContentDiv } from "../components/ContentDiv";

export const ProfilePage = () => {
  return (
    <Layout>
      <ContentDiv>
        <ProfileCard />
      </ContentDiv>
    </Layout>
  );
};
