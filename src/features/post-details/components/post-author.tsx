import { User } from "@/features/user-details/models/user.model";
import { colors } from "@/shared/utils/theme/colors";
import { Typography, Avatar, Stack } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const AuthorContainer = styled(Stack)`
  align-items: center;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
`;

export default function PostAuthor({ user }: { user: User }) {
  return (
    <Link href={`/user/${user.id}`} passHref style={{ textDecoration: "none" }}>
      <AuthorContainer direction="row" spacing={2}>
        <Avatar>{user.name.charAt(0)}</Avatar>
        <Typography variant="subtitle2" color={colors.white}>
          By: {user.name} ({user.email})
        </Typography>
      </AuthorContainer>
    </Link>
  );
}
