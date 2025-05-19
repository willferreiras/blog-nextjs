import React from "react";
import { FC } from "react";
import { Typography } from "@mui/material";
import { AnimationAndTextContainer, LoadingContainer } from "./loading.styles";
import animationData from "../../assets/loading.json";
import { colors } from "../../utils/theme/colors";
import Lottie from "lottie-react";
import BaseComponent from "../base.component";

interface ILoadingComponentProps {
  containerHeight?: string;
  containerWidth?: string;
  height?: string;
  width?: string;
  title?: string;
  disableText?: boolean;
}

const LoadingComponent: FC<ILoadingComponentProps> = ({
  containerHeight = "100%",
  containerWidth = "100%",
  height = 80,
  width = 80,
  title,
  disableText = false,
}) => {
  return (
    <BaseComponent>
      <LoadingContainer
        style={{ height: containerHeight, width: containerWidth }}
      >
        <AnimationAndTextContainer>
          <Lottie
            animationData={animationData}
            loop
            autoPlay
            style={{ width, height }}
          />
          {!disableText && (
            <Typography variant="labelLarge" color={colors.palette.neutral600}>
              {title || "Loading"}
            </Typography>
          )}
        </AnimationAndTextContainer>
      </LoadingContainer>
    </BaseComponent>
  );
};

export default LoadingComponent;
