
import React from 'react';
import { makeStyles  } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import {Toolbar , Container, Dialog , DialogContent} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MailPreview from './MailPreview'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    props.setOpenTutorial(false);
  };

  return (
    <div>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <ArrowBackIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Put your code here */}

        <DialogContent >
          <Container >
           <Typography variant='h5' gutterBottom>
           You can click on the take tour button for taking a tour of the website and understand the working.
           </Typography>
           <Typography variant='h6' gutterBottom>
           Step-1: Click on the upload file button to view the sheet.
           </Typography> 
           <img src={require("./images/1.png")} alt="" style={{width:1200 , height:700}} />
           <img src={require("./images/2.png")} alt="" style={{width:1200 , height:700}} />
           <Typography variant='h6' gutterBottom>
           Step-2: Set the Email subject and body of the email.
           </Typography> 
           <img src={require("./images/3.png")} alt="" style={{width:1200 , height:700}} />
           <img src={require("./images/4.png")} alt="" style={{width:1200 , height:700}} />
           <Typography variant='h6' gutterBottom>
           Step-3: Check all the boxes which you want to send in the email.
           </Typography>
           <img src={require("./images/5.png")} alt="" style={{width:1200 , height:700}} />
           <Typography variant='h6' gutterBottom>
           Step-4: Click to preview the email.
           </Typography>
           <img src={require("./images/6.png")} alt="" style={{width:1200 , height:700}} />
           <Typography variant='h6' gutterBottom> Step-5: Press Send email button and boom mails are send. </Typography>
           <img src={require("./images/7.png")} alt="" style={{width:1200 , height:700}} />
           <Typography variant='h3' style={{color:"orange", justify:"center"}} gutterBottom>
           Happy Mailing !!!
           </Typography>
           </Container>
         </DialogContent>

      </Dialog>
    </div>
  );
}
