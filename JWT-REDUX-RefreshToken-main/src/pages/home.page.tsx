import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ResetPassword from "../components/ResetPassword";

const HomePage: React.FC = () => {
  const resetToken = "your_reset_token_value_here";

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our App
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          A short description of your application goes here.
        </Typography>
        <Box mt={4}>
          <ResetPassword resetToken={resetToken} />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
