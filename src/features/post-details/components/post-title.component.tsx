import { Typography } from "@mui/material";
import styled from "styled-components";

const StyledTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export default function PostTitle({ title }: { title: string }) {
  return <StyledTitle variant="h1">{title}</StyledTitle>;
}
