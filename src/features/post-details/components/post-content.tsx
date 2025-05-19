import { Card, CardContent, Typography } from "@mui/material";

export default function PostContent({ body }: { body: string }) {
  return (
    <Card sx={{ my: 2, backgroundColor: "#f9f9f9" }}>
      <CardContent>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
