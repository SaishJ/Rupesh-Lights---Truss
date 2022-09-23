import React from "react";
import { Container, Grid } from "@mui/material";
import Logo from "../res/logo 1.png";

function Main() {
  return (
    <Container id="home">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={6} md={6} align="center">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "300px", height: "300px", marginTop: "10px" }}
          />
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
  );
}

export default Main;
