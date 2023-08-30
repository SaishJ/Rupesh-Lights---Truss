import React from "react";
import { Box, Container, Typography, Link, Stack } from "@mui/material";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
  return (
    <Box>
      <footer style={{ backgroundColor: "#f6f6f6" }}>
        <Container maxWidth="lg" style={{ padding: "25px" }}>
          <Typography
            align="center"
            color="#05396b"
            fontSize={20}
            fontWeight={600}
            fontFamily="Poppins"
            data-aos="zoom-in"
          >
            Rupesh Lights & Truss
          </Typography>
          <Box
            mt={2}
            mb={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={0.4}
            fontFamily="Poppins"
            data-aos="zoom-in"
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
          </Box>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Link
              href="https://www.instagram.com/rupesh_lights_official/"
              target="_blank"
            >
              <AiOutlineInstagram
                style={{ height: "2.5rem", width: "2.5rem", color: "#833AB4" }}
              />
            </Link>
            <Link href="https://wa.me/919967202648" target="_blank">
              <AiOutlineWhatsApp
                style={{ height: "2.2rem", width: "2.2rem", color: "#25D366" }}
              />
            </Link>
          </Stack>
          <Typography pt={1} align="center" color="#444" fontFamily="Poppins">
            2023 © Rupesh Lights, All Rights Reserved
          </Typography>
        </Container>
      </footer>
    </Box>
  );
}

export default Footer;
