import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack } from "@mui/system";
import { Paper, Typography } from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

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
          <Box sx={{ minWidth: 275 }}>
            <Typography variant="h1">Contact me</Typography>
            <Typography>
              If you are interested in having a website developed,maintained,or
              for creative consultation, I am looking for freelance work. For a
              custom quote please tap the contact button bellow!
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                size="medium"
                onClick={handleClickOpen}
              >
                Contact
              </Button>
            </Box>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please provide your email address to be contacted
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogContent>
                <DialogContentText>
                  And a message for the reason of your request
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Message"
                  type="message"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Paper>
      </Stack>
    </div>
  );
}
