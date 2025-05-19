import React from "react";
import BasePageComponent from "../base-page.component";
import BaseLandingPage from "../landing-page/base-landing.page";
import {
  SharedPageContainer,
  SharedPageLoadingContainer,
} from "@/shared/styles/shared.style";
import dynamic from "next/dynamic";

const LoadingComponent = dynamic(() => import("../loading/loading.component"), {
  ssr: false,
});

const LoadingLandingPage: React.FC = () => {
  return (
    <BasePageComponent>
      <BaseLandingPage>
        <SharedPageContainer>
          <SharedPageLoadingContainer>
            <LoadingComponent />
          </SharedPageLoadingContainer>
        </SharedPageContainer>
      </BaseLandingPage>
    </BasePageComponent>
  );
};

export default LoadingLandingPage;
