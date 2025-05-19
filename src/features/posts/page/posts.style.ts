import styled from "styled-components";
import { Box } from "@mui/material";
import { SharedStyledScrollContainer } from "@/shared/styles/shared.style";
import { MOBILE_BREAKPOINT } from "@/shared/utils/theme/mobile-dimen";
import { colors } from "@/shared/utils/theme/colors";

const ContentContainer = styled(SharedStyledScrollContainer)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 100%;
  min-width: 80vw;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    height: calc(100vh - 64px);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: calc(100vh - 64px - 80px);
    gap: 12px;
  }
`;

const DoubleColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  width: 80%;
  min-height: 340px;

  background: transparent;
  overflow-x: hidden;
  overflow-y: auto;

  justify-content: center;
  align-items: stretch;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    width: 90%;
    min-height: 230px;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const RowContent = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 24px;
  border-radius: 8px;
  min-height: 150px;
  height: auto;

  overflow-x: hidden;
  overflow-y: hidden;

  background: var(
    --Color-Gradient-SurfaceH,
    linear-gradient(
      90deg,
      ${colors.palette.neutral900} 15%,
      ${colors.palette.secondaryDarker} 75%
    )
  );
`;

const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  background: transparent;
  width: 80%;
  height: auto;
  min-height: 300px;
  overflow: hidden;
  align-items: center;
  padding: 12px;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
    margin-top: 12px;
    padding: 2px;
    width: 100%;
    min-height: 320px;
  }
`;

const MansoryGridContainer = styled.div`
  display: flex;
  border-radius: 8px;
  width: 80%;
  margin: 0 auto;
  padding: 0 16px;
  margin-top: 24px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
    margin-top: 12px;
    padding: 0 12px;
    width: 100%;
  }
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  border-radius: 8px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 70%;
  height: auto;
  align-items: center;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    gap: 12px;
    width: calc(100% - 24px);
    align-items: center;
  }
`;

const LoadingMore = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
  font-size: 1rem;
  color: #888;
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  background: var(
    --Color-Gradient-Header,
    linear-gradient(
      90deg,
      ${colors.palette.primaryLighter} 0%,
      ${colors.palette.primaryDarker} 60%,
      ${colors.palette.neutral800} 100%
    )
  );
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 16px;
  color: white;
  margin-top: auto;
  text-align: center;
`;

const NewsScroller = styled.div`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  span {
    display: inline-block;
    padding-left: 100%;
    animation: scrollText 20s linear infinite;
  }

  @keyframes scrollText {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export {
  ContentContainer,
  Footer,
  NewsScroller,
  RowContent,
  SliderContainer,
  DoubleColumnRow,
  PostContainer,
  LoadingMore,
  PostsWrapper,
  MansoryGridContainer,
};
