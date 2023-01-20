import React from "react";
import { Container, Grid } from "@mui/material";

function Main() {
  return (
    <div className="hero">
      <Container className="main" id="home">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={6} md={6} align="center">
            <div className="avatar"></div>
          </Grid>
          <Grid item xs={10} sm={6} md={6} align="center">
            <div style={{ margin: "-40px 20px 0" }}>
              <h2 className="heading">Rupesh Lights & Truss</h2>
              <h3 className="subheading">
                Everything in Lights and Truss for Events, Stage Show, D.J.’s
              </h3>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
