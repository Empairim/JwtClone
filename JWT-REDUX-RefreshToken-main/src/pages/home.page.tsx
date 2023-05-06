import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/forgot-password");
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to Our Website
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Feature 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of the first feature.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Feature 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of the second feature.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Feature 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of the third feature.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button variant="contained" onClick={handleButtonClick}>
              Go to Forgot/Edit Password Page
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
