import React from "react";
import {
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
    <div className="cards" id="about">
      <Typography variant="h5" className="title" component="div" align="center">
        About
      </Typography>
      <Container maxWidth="lg" style={{ padding: "20px 20px" }}>
        <Grid container spacing={4}>
          {cards.map((card) => {
            return (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card elevation={3}>
                  <CardMedia component="img" image={card.image} />
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      align="center"
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
    </div>
  );
}

export default About;
