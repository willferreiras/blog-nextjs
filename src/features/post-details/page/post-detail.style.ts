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
