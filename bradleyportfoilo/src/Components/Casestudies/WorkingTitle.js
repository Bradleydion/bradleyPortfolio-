import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import { ImageListItemBar, Typography } from "@mui/material";

export default function WorkingTitleCaseStudy() {
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
        <ImageListItemBar
          title={"Working Title"}
          actionIcon={
            <Button variant="contained" size="medium" onClick={handleClickOpen}>
              Case Study
            </Button>
          }
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Working Title</DialogTitle>
          <DialogContent>
            {/* This is where the content for the model will go */}
            <DialogContentText>Case Study</DialogContentText>
            <Typography>This will be my case study</Typography>
            {/* This is where the content for the model ends before the button */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </div>
  );
}
