import { Card, CardContent, Typography } from "@mui/material";
import { Comment } from "../models/comment.model";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card sx={{ my: 1, backgroundColor: "#f0f4f8" }}>
      <CardContent>
        <Typography variant="subtitle2">
          {comment.name} - {comment.email}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
