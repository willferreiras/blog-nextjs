import { Typography, Box } from "@mui/material";
import CommentCard from "./comment-card";
import { Comment } from "../models/comment.model";
import { colors } from "@/shared/utils/theme/colors";

export default function CommentsSection({ comments }: { comments: Comment[] }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        overflow: "hidden",
        mt: 1,
      }}
    >
      <Typography variant="h6" gutterBottom color={colors.white}>
        Comments
      </Typography>

      <Box
        sx={{
          maxHeight: { xs: "calc(100vh - 400px)", md: "480px" },
          overflowY: "auto",
          backgroundColor: "#eaf1f8",
          borderRadius: 2,
          p: 2,
        }}
      >
        {comments.map((c) => (
          <CommentCard key={c.id} comment={c} />
        ))}
      </Box>
    </Box>
  );
}
