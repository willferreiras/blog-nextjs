import React from "react";
import styled from "styled-components";

interface IBasePageComponentProps {
  children: React.ReactNode;
}

const BasePageComponentContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const BasePageComponent: React.FC<IBasePageComponentProps> = ({ children }) => {
  return <BasePageComponentContainer>{children}</BasePageComponentContainer>;
};

export default BasePageComponent;
