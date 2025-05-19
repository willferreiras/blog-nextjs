import styled from "styled-components";
import { Post } from "../../models/post.model";
import { colors } from "@/shared/utils/theme/colors";
import Link from "next/link";

const Card = styled.div<{ variant: "small" | "large" }>`
  background: linear-gradient(
    135deg,
    ${colors.palette.surfaceWhite} 0%,
    ${colors.palette.neutral300} 100%
  );
  border-radius: 8px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 0.1);
  padding: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  grid-column: span ${({ variant }) => (variant === "large" ? 2 : 1)};
  grid-row: span ${({ variant }) => (variant === "large" ? 2 : 1)};

  @media (max-width: 480px) {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    height: auto;
  }
`;
const Title = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 8px 0;
  color: ${colors.palette.neutral900};
`;

const Excerpt = styled.p`
  font-size: 0.9rem;
  color: ${colors.palette.neutral700};
  flex-grow: 1;
`;

type PostCardProps = {
  post: Post;
  variant?: "small" | "large";
};

export function PostGridCard({ post, variant = "small" }: PostCardProps) {
  return (
    <Card variant={variant}>
      <Link
        href={`/post/${post.id}`}
        passHref
        style={{ textDecoration: "none" }}
      >
        <Title>{post.title}</Title>
        <Excerpt>{post.body.substring(0, 100)}...</Excerpt>
      </Link>
    </Card>
  );
}
