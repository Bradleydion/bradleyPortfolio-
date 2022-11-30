import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack } from "@mui/system";
import { Container, Fab, FormControl, Paper } from "@mui/material";
import axios from "axios";

export default function BlogPost() {
  const [open, setOpen] = React.useState(false);

  const [blogPost, setBlogPost] = React.useState({
    postTitle: "",
    postBody: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:6000/api/blog", blogPost)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  };

  return (
    <div>
      <Stack mt={8}>
        <Paper>
          <Box>
            <Fab onClick={handleClickOpen} children="+" />
            <Container>
              <Dialog open={open} onClose={handleClose}>
                <FormControl onSubmit={handleBlogSubmit}>
                  <DialogTitle>Blog Post</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Title</DialogContentText>
                    <TextField
                      autoFocus
                      name="postTitle"
                      margin="dense"
                      id="title"
                      label="Title"
                      type="text"
                      value={blogPost.postTitle}
                      onChange={handleInputChange}
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogContent>
                    <DialogContentText>Body</DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="postBody"
                      id="postBody"
                      label="Body"
                      type="text"
                      value={blogPost.postBody}
                      onChange={handleInputChange}
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                  </DialogActions>
                </FormControl>
              </Dialog>
            </Container>
          </Box>
        </Paper>
      </Stack>
    </div>
  );
}
