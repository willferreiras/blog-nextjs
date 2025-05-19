import { colors } from "@/shared/utils/theme/colors";
import { MOBILE_BREAKPOINT } from "@/shared/utils/theme/mobile-dimen";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const headerHeight = "64px";

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  flexGrow: 1,
}));

export const SharedPageContainer = styled(Box)`
  display: flex;
  height: calc(100dvh - ${headerHeight});
  width: 100%;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  background: linear-gradient(
    90deg,
    rgba(69, 143, 255, 0.6) 0%,
    rgba(179, 209, 255, 0.8) 35%,
    rgba(179, 209, 255, 0.8) 65%,
    rgba(69, 143, 255, 0.6) 100%
  );
`;

export const PostsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  border-radius: 8px;
`;

export const PostContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 70%;
  height: auto;
  align-items: center;
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    gap: 12px;
    width: 100%;
    align-items: center;
  }
`;

export const LoadingMore = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
  font-size: 1rem;
  color: #888;
`;
