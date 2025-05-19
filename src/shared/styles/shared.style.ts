import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../utils/theme/mobile-dimen";
import { colors } from "../utils/theme/colors";

const headerHeight = "64px";

export const SharedPageContainer = styled.div`
  display: flex;
  height: calc(100vh - ${headerHeight});
  width: 100%;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
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
`;

export const SharedPageContentContainer = styled.div`
  display: grid;
  max-width: 100%;
  height: calc(100vh - 64px);
  grid-template-rows: max-content 1fr;
  padding-left: 32px;
  padding-right: 32px;
  overflow: hidden;
`;

export const SharedPageLoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SharedTittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  margin-top: 32px;
  overflow: hidden;
`;

export const SharedTitleBackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const SharedBackgroundTitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const SharedSubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
  }
`;

export const SharedSubMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
  }
`;

export const SharedStyledScrollContainer = styled.div`
  &::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: ${colors.palette.neutral800}; /* track color */
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.palette.neutral900}; /* thumb color */
    border-radius: 99px;
    border: 2px solid #1e1e2a; /* gives it a little “padding” */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.palette.surfaceDarkest};
    width: 12px;
  }

  /* Firefox */
  scrollbar-width: thin; /* “auto” or “thin” */
  scrollbar-color: ${colors.palette.neutral900} /* thumb */
    ${colors.palette.neutral800}; /* track */
`;
