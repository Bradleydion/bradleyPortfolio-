import {
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import profilePicture from "../Assets/PSwebsite.png";
import review from "../Assets/review.png";
import chuckles from "../Assets/chuckles.png";
import ReviewCaseStudy from "./Casestudies/Review";
import WorkingTitleCaseStudy from "./Casestudies/WorkingTitle";
import PalmerCaseStudy from "./Casestudies/Palmer";

export default function Portfolio() {
  return (
    <Stack mt={8}>
      <Paper>
        <Typography variant="h2"> Projects</Typography>
        <Box sx={{ maxWidth: 1280 }}>
          <ImageList sx={{ width: 800, height: 500 }} cols={3}>
            <ImageListItem>
              <img
                src={profilePicture}
                srcSet={profilePicture}
                alt={"Palmer & Sicard mock up website"}
                loading="lazy"
              />
              <PalmerCaseStudy />
            </ImageListItem>
            <ImageListItem>
              <img
                src={review}
                srcSet={review}
                alt={"CRM Project"}
                loading="lazy"
              />
              <ReviewCaseStudy />
            </ImageListItem>
            <ImageListItem>
              <img
                src={chuckles}
                srcSet={chuckles}
                alt={"Chuckles"}
                loading="lazy"
              />
              <WorkingTitleCaseStudy />
            </ImageListItem>
          </ImageList>
          <Typography>
            Git Hub Repos repos and links (look at photo list in material ui)
            Bullet a small casestudy for each- what the product was needed for,
            how you solved the problem, roadblocks you had, and how you overcame
            them
          </Typography>
        </Box>
      </Paper>
    </Stack>
  );
}
