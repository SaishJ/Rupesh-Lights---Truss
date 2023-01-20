import React from "react";
import { Container, Typography, Grid } from "@mui/material";

function Contact() {
  return (
    <div className="contact" id="contact">
      <Typography variant="h4" component="div" align="center" color="#05396b">
        Contact
      </Typography>
      <Container maxWidth="md" style={{ padding: "40px 20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterbottom="true">
              Address
            </Typography>
            <Typography variant="subtitle1" gutterbottom="true" component="p">
              608/6, Building no.3, <br />
              Panchsheel Hsg. Society, <br />
              E Moses Rd, Worli Naka,
              <br />
              Mumbai, Maharashtra 400018
            </Typography>
            <Typography variant="h6" gutterbottom="true">
              Phone
            </Typography>
            <Typography variant="subtitle1" gutterbottom="true" component="p">
              9967202648
            </Typography>
            <Typography variant="h6" gutterbottom="true">
              Email
            </Typography>
            <Typography variant="subtitle1" gutterbottom="true" component="p">
              rupeshlights@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.1054760597085!2d72.81460481421145!3d18.995664759430564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cff4d5fe753d%3A0x9cb1c960e6f53ea4!2sRUPESH%20LIGHTS%20%26%20TRUSS!5e1!3m2!1sen!2sin!4v1663839667427!5m2!1sen!2sin"
              width="350"
              height="350"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
