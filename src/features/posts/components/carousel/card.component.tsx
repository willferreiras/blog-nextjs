import { Card, Typography, Box } from "@mui/material";
import Link from "next/link";
import { Post } from "../../models/post.model";
import { colors } from "@/shared/utils/theme/colors";

export const CarouselCard = ({ post }: { post: Post }) => (
  <Link
    href={`/post/${post.id}`}
    passHref
    style={{ textDecoration: "none", borderRadius: "16px" }}
  >
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: 400,
        minWidth: 0,
        height: 280,
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.palette.surfaceWhite,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box
        sx={{
          height: "45%",
          background: `linear-gradient(90deg, ${colors.palette.secondaryBranding}, ${colors.palette.secondaryDarker})`,
          display: "flex",
          alignItems: "center",
          padding: "0 1.25rem",
          boxShadow: `0 4px 10px ${colors.palette.secondaryBranding}88`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.4rem",
            color: colors.palette.neutralWhite,
            textAlign: "left",
            lineHeight: 1.2,
            margin: 0,
            userSelect: "none",
          }}
        >
          {post.title}
        </Typography>
      </Box>

      <Box
        sx={{
          height: "55%",
          backgroundColor: colors.palette.neutral100,
          padding: "1rem 1.25rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "1rem",
            color: colors.palette.neutral800,
            textAlign: "justify",
            lineHeight: 1.5,
            margin: 0,
            userSelect: "text",
          }}
        >
          {post.body.substring(0, 140)}...
        </Typography>
      </Box>
    </Card>
  </Link>
);
