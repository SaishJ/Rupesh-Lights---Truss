import React from "react";
import { Box, Container, Grid } from "@mui/material";

function Main() {
  return (
    <Box className="hero" mt={{ md: 10 }}>
      <Container className="main" id="home">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={6} md={6} align="center">
            <Box className="avatar" data-aos="zoom-in"></Box>
          </Grid>
          <Grid item xs={10} sm={6} md={6} align="center">
            <Box style={{ margin: "-40px 20px 0" }} data-aos="zoom-in">
              <h2 className="heading">Rupesh Lights & Truss</h2>
              <h3 className="subheading">
                Everything in Lights and Truss for Events, Stage Show, D.J.’s
              </h3>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
