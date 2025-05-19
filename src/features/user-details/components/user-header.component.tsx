import { Box, Typography, Paper, Divider } from "@mui/material";
import { Address } from "../models/address.model";

type UserPostsHeaderProps = {
  name: string;
  email: string;
  companyName: string;
  address: Address;
};

export default function UserPostsHeader({
  name,
  email,
  companyName,
  address,
}: UserPostsHeaderProps) {
  return (
    <Paper
      sx={{
        p: 3,
        mb: 4,
        width: "100%",
        mx: "auto",
        backgroundColor: "#f5f5f5",
      }}
      elevation={2}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Posts by User
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box mb={1}>
        <Typography variant="subtitle1" fontWeight="600">
          Name:
        </Typography>
        <Typography variant="body1">{name}</Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="subtitle1" fontWeight="600">
          E-mail:
        </Typography>
        <Typography variant="body1">{email}</Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="subtitle1" fontWeight="600">
          Company:
        </Typography>
        <Typography variant="body1">{companyName}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1" fontWeight="600" gutterBottom>
          Address:
        </Typography>
        <Typography variant="body2">
          {address.street}, {address.suite}, {address.city} - {address.zipcode}
        </Typography>
      </Box>
    </Paper>
  );
}
