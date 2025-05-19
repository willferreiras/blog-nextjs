import { colors } from "@/shared/utils/theme/colors";
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
