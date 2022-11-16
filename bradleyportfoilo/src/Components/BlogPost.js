import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack } from "@mui/system";
import { Container, Fab, Paper } from "@mui/material";

export default function BlogPost() {
  const [open, setOpen] = React.useState(false);
  const aPost = {
    title: "",
    body: "",
  };
  const [blogPost, setBlogPost] = React.useState(aPost);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack mt={8}>
        <Paper>
          <Box>
            <Fab onClick={handleClickOpen}>+</Fab>
            <Container>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Blog Post</DialogTitle>
                <DialogContent>
                  <DialogContentText>Title</DialogContentText>
                  <TextField
                    autoFocus
                    name="titleField"
                    margin="dense"
                    id="title"
                    label="Title"
                    type="headline"
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
                    type="postBody"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
              </Dialog>
            </Container>
          </Box>
        </Paper>
      </Stack>
    </div>
  );
}
