import { Comment } from "@/models/comment";
import { List, ListItem, ListItemText } from "@mui/material";

export const CommentList = ({ comments }: { comments: Comment[] }) => (
  <List>
    {comments.map((comment) => (
      <ListItem key={comment.id} alignItems="flex-start">
        <ListItemText primary={comment.name} secondary={comment.body} />
      </ListItem>
    ))}
  </List>
);
