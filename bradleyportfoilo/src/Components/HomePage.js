import { ClassNames } from "@emotion/react";
import {
  Button,
  Card,
  CardMedia,
  Container,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import profilePicture from "../Assets/Profilepage.JPG";
import Art from "./Art";
import FormDialog from "./Contact";
import Portfolio from "./Portfolio";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Stack mt={8} direction="row" justifyContent="center" alignItems="center">
        <ImageList sx={{ width: 250, height: 500 }} cols={1} rowHeight={164}>
          <ImageListItem>
            <img
              src={`${profilePicture}`}
              srcSet={`${profilePicture}`}
              alt={""}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Stack>
      <Paper>
        <Typography variant="h1">Welcome to The Bradley Project!</Typography>
        <Container maxWidth={"md"}>
          <Typography variant="paragraph">
            Here at The Bradley Project website, you get a constant glimpse at
            projects I am working on. But first let me introduce myself. Hi, Im
            Bradley Dion, a self taught and still learning fullstack web
            developer. My specialty is front end design as well as UX/UI design.
            I started my software journey 2 years ago when I attended a coding
            boot camp. Feel free to parooze my blog for details on my coding
            journey. On this site you will get a chance to see my resume, view
            current and past projects, as well as see the different non I.T.
            projects I am working on. A little more about me: Born and raised in
            New Hampshire, I moved from New England to Florida and have started
            setting down roots in Oregon. I have a passion for creativity
            whether it be writing, photography, music,or film. In my free time
            you can catch me hanging at the beach with a giant float, or
            relaxing with my friends while playing video games. I am currently
            open and accepting website design request and am looking for the
            next step in my career.
          </Typography>
        </Container>
        <Typography variant="h3">
          What does The Bradley Project Mean?
        </Typography>
        <Container maxWidth={"md"} mb={4}>
          <Typography variant="paragraph">
            For as long as I can remember, I have always considered myself a
            work in project. Just like everyone else, I am learning new ways to
            navigate my day to day. The Bradley Project was a concept I came up
            with when deciding on my Instagram handle and what I wanted to share
            on a photography platform. To me, I wanted to track and show my
            growth as a human. Between normal day to day life, as well as fun
            and interesting experiences, or even mile stones in my life. The
            Bradley Project is a focus on the idea that I am always under
            construction. Learning new things, finding new adventures and making
            new friends, I am constantly growing. I am an investment, well worth
            the time and energy and am always interested in constructive
            feedback to help me better myself and grow.
          </Typography>
        </Container>
      </Paper>
      <Portfolio />
      <Art />
      <FormDialog />
    </Container>
  );
}
