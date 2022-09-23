import React from "react";
import { Container, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <div>
      <footer style={{ backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg" style={{ padding: "25px" }}>
          <Typography variant="h6" align="center">
            Rupesh Lights & Truss
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 0",
              alignItems: "center",
            }}
          >
            <Link href="#home" className="link" underline="none" color="#222">
              Home
            </Link>
            <Link href="#about" underline="none" color="#222">
              About
            </Link>
            <Link href="#contact" underline="none" color="#222">
              Contact
            </Link>
          </div>
          <Typography
            variant="subtitle1"
            align="center"
            color="#444"
            style={{ padding: "5px" }}
          >
            2022 © Rupesh Lights, All Rights Reserved
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
