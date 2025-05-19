import styled from "styled-components";
import { colors } from "../../utils/theme/colors";

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: max-content 1fr;
`;

const MainContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(
    --Color-Gradient-SurfaceH,
    linear-gradient(
      90deg,
      rgba(26, 32, 44, 1) 0%,
      rgba(11, 74, 201, 0.75) 30%,
      rgba(11, 74, 201, 0.75) 70%,
      rgba(26, 32, 44, 1) 100%
    )
  );
  overflow: hidden;
`;

const BottomNavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
`;

const BottomNavigationItemContainer = styled.div<{ selected: boolean }>`
  width: 64px;
  height: 32px;
  border-radius: 999px;
  background-color: ${(props) =>
    props.selected ? colors.primaryColor : "transparent"};
  align-items: center;
  display: flex;
  justify-content: center;
`;

const FabContainer = styled.div`
  position: fixed;
  bottom: 96px;
  right: 16px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  RootContainer,
  MainContentContainer,
  BottomNavigationContainer,
  BottomNavigationItemContainer,
  FabContainer,
};
