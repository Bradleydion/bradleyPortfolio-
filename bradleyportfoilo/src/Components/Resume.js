import { Box, Button, Card, Paper, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function Resume() {
  return (
    <Paper>
      <Container maxWidth={"md"}>
        <Typography variant="h2">Resume</Typography>
        <Typography variant="h5">Skills</Typography>
        <Typography variant="h6">
          Coding Languages: Javascript, HTML, CSS, BootStrap, React, Python,
          PostgreSQL, Git.
        </Typography>
        <Typography variant="h5">Experience</Typography>
        <Container>
          <Stack
            mt={8}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Box maxWidth={300}>
              <Card>
                <Typography variant="h6">The Oregonian</Typography>
                <Typography variant="h6">Advertising Coordinator</Typography>
                <Typography variant="h6">February 2022 to Present</Typography>
                <Typography variant="body">
                  Maintain client relations. Primary source of trouble shooting
                  for any and all campaign assets Worked with advertising team
                  and fulfillment team to ensure proper placement of marketing
                  campaigns for clients
                </Typography>
              </Card>
            </Box>
            <Box maxWidth={300}>
              <Card>
                <Typography variant="h6">Bath Fitter</Typography>
                <Typography variant="h6">Office Manager</Typography>
                <Typography variant="h6">June 2014 to January 2022</Typography>
                <Typography variant="body">
                  Trained, mentored and led a team of over 15 individuals in an
                  office setting while providing exemplary customer service.
                  Provided swift and effective conflict resolution while
                  maintaining a professional demeanor.
                </Typography>
              </Card>
            </Box>
            <Box maxWidth={300}>
              <Card>
                <Typography variant="h6">Quench Lounge</Typography>
                <Typography variant="h6">Bartender</Typography>
                <Typography variant="h6">
                  September 2018 to September 2019
                </Typography>
                <Typography variant="body">
                  Provide hospitality to any and all guests while maintaining
                  the bar. Follow state and federal liquor laws while mixing and
                  producing beverages to of age guests. Follow state and federal
                  sanitation laws to maintain a clean and safe working
                  environment.
                </Typography>
              </Card>
            </Box>
          </Stack>
        </Container>
        <Typography variant="h5">Education</Typography>
        <Typography variant="h6">
          Lambda School / Full Stack Web Development August 2020 - August 2021
        </Typography>
        <Typography variant="h6">
          Lambda School /UX Design September 2019 - August 2020
        </Typography>
        <Typography variant="h5">Professional Volunteer Work</Typography>
        <Typography variant="h6">
          Event Management Certification: Event coordinator for Bath Fitter.
          Staffed, held and executed home shows, live events, and small
          gatherings to promote material and sell products. Received Event
          Management Certification at Bath Fitter Headquarters in Tennessee .
          Active support of the LGBTQIA+ community hosting several drag show
          benefits promoting education and wellness, while working at a local
          ally venue.
        </Typography>
        <Button>Model for Letters of recommendation</Button>
      </Container>
    </Paper>
  );
}
