import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import Link from "next/link";
import { Post } from "../../models/post.model";

const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 940px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  border-left: 5px solid #1976d2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 767px) {
    min-width: 100%;
    margin: 0;
  }
`;

export const PostCard = ({ post }: { post: Post }) => (
  <Link href={`/post/${post.id}`} passHref style={{ textDecoration: "none" }}>
    <StyledCard variant="outlined">
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body.substring(0, 100)}...
        </Typography>
      </CardContent>
    </StyledCard>
  </Link>
);
