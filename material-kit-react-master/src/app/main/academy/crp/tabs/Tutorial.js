
import React from 'react';
import { makeStyles } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Container, Dialog, DialogContent } from '@material-ui/core';
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
              <ArrowBackIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Put your code here */}

        <DialogContent>
        <Typography variant='h5' gutterBottom style={{paddingLeft:600}}>
           <b>Follow these 4 steps and you are done.</b>
           <br></br>
           1. Login using login button in top bar. 
           <br></br>
           2. Upload a non corrupt csv file. 
           <br></br>
           3. Select the columns, put body and subject if you want. 
           <br></br>
           4. Click on send button, boom mails sent. 
          </Typography>

          <br></br>
          <br></br>
          <Typography variant='h5' gutterBottom style={{paddingLeft:200 , paddingTop:50}}>
            You can click on the take tour button for taking a tour of the website and understand the working.
            Find below a detailed step wise guide. 
          </Typography>
          <Container style={{ paddingLeft: 200 }}>

            <Typography variant='h5' gutterBottom style={{paddingLeft:150}}>
              Step-1: Login using your <strong>college email ID</strong>, after that you will be asked for OTP authentication. 
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/1.png"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h5' gutterBottom style={{paddingLeft:75}}>
              <br></br>
              <br></br>
           Step-2: Click on the upload file button to view the sheet.
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/3.jpeg"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h5' gutterBottom style={{paddingLeft:70}}>
              <br></br>
              <br></br>
           Step-3: Set the Email subject and body of the email.
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/4.png"} alt="" style={{ width: 750, height: 525, paddingRight: 10 }} />
            <img src={"static/images/5.png"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h5' gutterBottom>
              <br></br>
              <br></br>
           Step-4: Check all the boxes which you want to send in the email.
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/6.png"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h5' gutterBottom style={{paddingLeft:150}}>
              <br></br>
              <br></br>
           Step-5: Click to preview the email.
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/7.png"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h5' gutterBottom>
              <br></br>
              <br></br>
           Step-6: Press Send email button and boom mails are send. </Typography>
            <br></br>
            <br></br>
            <img src={"static/images/8.png"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h5' gutterBottom style={{paddingLeft:70}}>
              <br></br>
              <br></br>
           Step-7: Press reset to get back to the original page.
           </Typography>
            <br></br>
            <br></br>
            <img src={"static/images/9.png"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h3' style={{ color: "orange", justify: "center",paddingLeft:220 }} gutterBottom>
              <br></br>
              <br></br>
           Happy Mailing !!
           </Typography>
          </Container>
        </DialogContent>

      </Dialog>
    </div>
  );
}
