import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Tutorial(props) {

    const [open, setOpen] = React.useState(true);
    
  const handleClose = () => {
    props.setOpenTutorial(false);
  };

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography variant='h4' gutterBottom>
          Tutorial
          </Typography> 
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant='h5' gutterBottom>
          You can click on the take tour button for taking a tour of the website and understand the working.
          </Typography>
          <Typography variant='h6' gutterBottom>
          Step-1: Click on the upload file button.
          </Typography>
          <Typography variant='h6' gutterBottom>
          Step-2: Select the columns of the sheet that you want to send you can sort and filter from the table.
          </Typography>
          <Typography variant='h6' gutterBottom>
          Step-3: You can type a subject and a body to be sent above the columns.           </Typography>
          <Typography variant='h6' gutterBottom>
          Press sendEmail button and boom mails are send. </Typography>
          <Typography variant='h5' style={{color:"orange", justify:"center"}} gutterBottom>
          Happy Mailing </Typography>

        </DialogContent>
        
      </Dialog>
    </div>
  );
}