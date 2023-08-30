import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { cards } from "./Data";

function About() {
  return (
    <Box mt={{ sm: 8, md: 12 }} className="cards" id="about">
      <Typography
        className="title"
        align="center"
        color="#05396b"
        fontSize={30}
        fontWeight={600}
        fontFamily="Poppins"
        letterSpacing={1}
        data-aos="zoom-in-up"
      >
        Gallery
      </Typography>
      <Container maxWidth="lg" style={{ padding: "40px 20px" }}>
        <Grid container spacing={4}>
          {cards.map((card) => {
            return (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card elevation={3} data-aos="fade-up" data-aos-duration="1500">
                  <CardMedia component="img" image={card.image} />
                  <CardContent>
                    <Typography
                      // variant="subtitle1"
                      fontSize={18}
                      fontWeight={600}
                      component="div"
                      align="center"
                      fontFamily="Poppins"
                      style={{ padding: "2px 0" }}
                    >
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
