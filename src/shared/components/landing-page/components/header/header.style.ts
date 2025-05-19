import styled from "styled-components";
import { colors } from "../../../../utils/theme/colors";
import { MOBILE_BREAKPOINT } from "../../../../utils/theme/mobile-dimen";

const HeaderRootContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
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
  width: 100%;
  height: 64px;
`;

const LeftContainer = styled.div`
  margin-left: 32px;
  display: flex;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-left: 16px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding-right: 32px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-right: 8px;
    gap: 8px;
  }
`;

const SocialRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  a {
    color: white;
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      transform: scale(1.2);
      color: #00ffd1;
    }
  }
`;

export {
  HeaderRootContainer,
  LeftContainer,
  RightContainer,
  SocialIcons,
  SocialRow,
};
