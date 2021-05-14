
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
import { Editor } from '@tinymce/tinymce-react';
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
            <Typography variant="h5" className="text-center">
              Tutorial
            </Typography>
          </Toolbar>
        </AppBar>
        {/* Put your code here */}

        <DialogContent>
        
        <Typography variant='h5' gutterBottom style={{paddingLeft:400}}>
           <b>Follow these 4 simple steps and you are done.</b>
           <br></br> 
            1. Either
           <br></br>&nbsp;&nbsp;&nbsp;(a) authenticate yourself to send emails via our email-id<br></br> OR<br></br> &nbsp;&nbsp;&nbsp;(b) login using your email-id to send emails from your email-id. 
           <br></br>
           2. Upload a csv file. Ensure first row is the header row and one column header is <strong>Email</strong>.
           <br></br>
           3. Select the columns that you want to include in the email message + mention the Subject and email body text. 
           <br></br>

           4. Click on send button, boom mails sent. 
           <br>
           </br>
           Note: We provide the feature to PREVIEW before sending the emails.<br></br> We recommend using authenticate option (a), as it provides rich text options and seems more robust.
          </Typography>

          <br></br>
          <br></br>
          
          <Typography variant='h5' gutterBottom style={{paddingLeft:400 , paddingTop:50}}>
              For detailed guidelines regarding ESMP usage, you may either refer to the screenshots below or click on the "Take Tour" button.
          </Typography>
          <br></br>
          <br></br>
          <Container style={{ paddingLeft: 200 }}>

            <Typography variant='h5' gutterBottom style={{paddingLeft:0}}>
              <strong>Step-1:</strong> Here you have 2 options: 
              <br></br> &nbsp; (a)Authenticate your email id with secret key and then use our email id to send mails. 
              <br></br> &nbsp; (b)Login using your email id,  emails will be sent with your mail id. 
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/1.png"} alt="" style={{ width: 450, height: 525 }} />
            <img src={"static/images/2.png"} alt="" style={{ width: 450, height: 525 }} />
            <Typography variant='h5' gutterBottom style={{paddingLeft:0}}>
              <br></br>
              <br></br>
              <strong>Step-2:</strong> Click on the upload file button to upload the sheet.Ensure first row is the header row and one column header is Email.
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/3.png"} alt="" style={{ width: 750, height: 525 }} />
            <Typography variant='h5' gutterBottom style={{paddingLeft:0}}>
              <br></br>
              <br></br>
              <strong>Step-3:</strong> Select the columns that you want to include in the email message + mention the Subject and email body text.
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/4.png"} alt="" style={{ width: 900, height: 525, paddingRight: 10 }} />
            <Typography variant='h5' gutterBottom>
              <br></br>
              <br></br>
              <strong>Step-4:</strong> You can preview the mail, and then after ensuring everything is correct click on the send email.Boom mails sent.  
           <br></br>
              <br></br>
            </Typography>
            <img src={"static/images/5.png"} alt="" style={{ width: 750, height: 525 }} />
            {/* <Typography variant='h5' gutterBottom style={{paddingLeft:150}}>
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
            <img src={"static/images/9.png"} alt="" style={{ width: 750, height: 525 }} /> */}
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
