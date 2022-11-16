import { Card, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import BlogPost from "./BlogPost";
import React from "react";

export default function Blog() {
  return (
    <Stack mt={10}>
      <Container maxWidth={"md"}>
        <Typography variant="h2">Blog</Typography>
        <Box>
          <Typography variant="paragraph">
            {" "}
            This will be where I need to place the different blogs. I havnt come
            up with the system yet
          </Typography>
          <Card>
            <Typography variant="h3">Title</Typography>
            <Typography variant="caption">Timestamp</Typography>
            <Typography variant="body">Body</Typography>
          </Card>
        </Box>
        <Box mt={8} alignContent="end">
          <Typography variant="body">
            {" "}
            this will only activate once the user is logged in
          </Typography>
          <BlogPost />
        </Box>
      </Container>
    </Stack>
  );
}
