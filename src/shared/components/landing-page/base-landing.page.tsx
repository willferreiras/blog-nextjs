import React from "react";
import Header from "./components/header/header.component";
import { MainContentContainer, RootContainer } from "./base-landing.style";
interface ILandingPageProps {
  children?: React.ReactNode;
}

const LandingPage: React.FC<ILandingPageProps> = ({ children }) => {
  return (
    <RootContainer>
      <Header />
      <MainContentContainer>{children}</MainContentContainer>
    </RootContainer>
  );
};

export default LandingPage;
