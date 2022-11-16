import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import Fractures from "../Assets/Fractures.png";
import Obscurity from "../Assets/Obscurity.png";

export default function Art() {
  return (
    <Stack mt={8}>
      <Paper>
        <Container maxWidth={"md"}>
          <Typography variant="h2">The Bradley Project Publications</Typography>
          <Typography>
            In late 2019, I had decided to step out of my comfort zone. I have
            been writing poetry since I was 13. I had a large number of poems
            and decided to give myself the goal of releasing a collection of
            books true to my theme called The Bradley Project. The collection
            would have volumes spanning across the different stages of my life
            in which the poems were written. As of the writing of this blurb,
            there has been two volumes. I anticipate adding more to the
            collection as time goes on. And as I continue to grow and change so
            shall the content.
          </Typography>
        </Container>
        <Box sx={{ maxWidth: 1280 }}>
          <ImageList sx={{ width: 700, height: 700 }}>
            <ImageListItem>
              <img
                src={Fractures}
                srcSet={Fractures}
                alt={"The Bradley Project Volume 1"}
                loading="lazy"
              />
              <ImageListItemBar
                title={"Volume 1: Fractured A Collection Of Broken Things"}
                actionIcon={<Button variant="contained">Amazon</Button>}
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={Obscurity}
                srcSet={Obscurity}
                alt={"Volume 2"}
                loading="lazy"
              />
              <ImageListItemBar
                title={"Volume 2: Obscurity"}
                actionIcon={<Button variant="contained">Amazon</Button>}
              />
            </ImageListItem>
          </ImageList>
        </Box>
      </Paper>
    </Stack>
  );
}
