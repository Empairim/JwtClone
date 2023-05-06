import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/forgot-password");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Button variant="contained" onClick={handleButtonClick}>
        Go to Forgot Password Page
      </Button>
    </Box>
  );
};

export default HomePage;
