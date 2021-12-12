import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "30px",
  },
}));

export default function Modal({ open, setModal }) {
  const classes = useStyles();
  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle
          disableTypography
          className={classes.title}
          id='alert-dialog-title'
        >
          {"Thank you"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Your information has been successfully sent.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
