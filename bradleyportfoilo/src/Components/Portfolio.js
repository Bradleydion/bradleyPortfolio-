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

export default function Portfolio() {
  return (
    <Stack mt={8}>
      <Paper>
        <Typography variant="h1"> Projects</Typography>
        <Box sx={{ maxWidth: 1280 }}>
          <ImageList sx={{ width: 700, height: 500 }}>
            <ImageListItem>
              <img
                src={profilePicture}
                srcSet={profilePicture}
                alt={"Palmer & Sicard mock up website"}
                loading="lazy"
              />
              <ImageListItemBar
                title={"Palmer & Sicard"}
                actionIcon={<Button variant="contained">Case Study</Button>}
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={review}
                srcSet={review}
                alt={"CRM Project"}
                loading="lazy"
              />
              <ImageListItemBar
                title={"Review"}
                actionIcon={<Button variant="contained">Case Study</Button>}
              />
            </ImageListItem>
          </ImageList>
          <Typography>
            Git Hub Repos repos and links (look at photo list in material ui)
            Bullet a small casestudy for each- what the product was needed for,
            how you solved the problem, roadblocks you had, and how you overcame
            them
          </Typography>
        </Box>
        <Box>
          <Typography>
            Use this section for the books (The bradley project with links to
            amazon for each book)
          </Typography>
        </Box>
        <Box>
          <Typography>
            Use this section to create the resume you havew
          </Typography>
        </Box>
      </Paper>
    </Stack>
  );
}
