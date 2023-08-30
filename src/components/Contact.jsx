import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

function Contact() {
  return (
    <Box
      mt={{ sm: 5, md: 8 }}
      className="contact"
      id="contact"
      overflow="hidden"
    >
      <Typography
        variant="h4"
        align="center"
        color="#05396b"
        fontSize={30}
        fontWeight={600}
        fontFamily="Poppins"
        letterSpacing={1}
        data-aos="zoom-in-up"
      >
        Contact
      </Typography>
      <Container maxWidth="md" style={{ padding: "40px 20px" }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Typography
              variant="h6"
              gutterbottom="true"
              fontFamily="Poppins"
              fontWeight={600}
            >
              Address
            </Typography>
            <Typography
              variant="subtitle1"
              gutterbottom="true"
              component="p"
              fontFamily="Poppins"
            >
              Rupesh Lights, <br />
              Janata Seva mandal, <br />
              Dainik shivneri marg,
              <br />
              Gandhi Nagar, <br />
              Mumbai, Maharashtra 400013
            </Typography>
            <Typography
              pt={0.5}
              variant="h6"
              gutterbottom="true"
              fontFamily="Poppins"
              fontWeight={600}
            >
              Phone
            </Typography>
            <Typography
              variant="subtitle1"
              gutterbottom="true"
              component="p"
              fontFamily="Poppins"
            >
              <a href="tel:+919967202648">9967202648</a>
            </Typography>
            <Typography
              pt={0.5}
              variant="h6"
              gutterbottom="true"
              fontFamily="Poppins"
              fontWeight={600}
            >
              Email
            </Typography>
            <Typography
              variant="subtitle1"
              gutterbottom="true"
              component="p"
              fontFamily="Poppins"
            >
              <a href="mailto:rupeshlights@gmail.com">rupeshlights@gmail.com</a>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{ overflow: "hidden" }}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3197.7839945063424!2d72.82209584520298!3d18.99763568175991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU5JzUxLjYiTiA3MsKwNDknMTkuMSJF!5e1!3m2!1sen!2sin!4v1693393284086!5m2!1sen!2sin"
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
    </Box>
  );
}

export default Contact;
