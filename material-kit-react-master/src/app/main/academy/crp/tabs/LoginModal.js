import React, { useState } from 'react';
import { makeStyles  } from '@material-ui/styles';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar , Dialog , TextField, Container , Button , Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MailPreview from './MailPreview'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import AboutUsComponent from './AboutUsComponent';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  form: {
      spacing: theme.spacing(2)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true); 
  const [email , setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [error , setError] = useState("");
  function generateOTP() {
      

  }
  function handleOTPChange(e) {
      setOTP(e.target.value)
  }



  const  handleEmailChange= (e) =>{


    setEmail(e.target.value);


  }

  const handleClose = () => {
    props.setOpenLoginModal(false);
  };

  return (
    <div>

      <Dialog fullWidth open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <ArrowBackIcon/> 
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Put your code here */}
     
        <Grid container lg = {12} spacing={1}>
            <Grid  item lg ={9}>
            <TextField
            value={email}
            fullWidth
            variant="outlined"
            label="Enter Your Email"
            className="email"
            style={{marginLeft:20 , marginTop:30 , marginBottom:30 , marginRight: 20}}
            onChange={handleEmailChange}
        ></TextField>

            </Grid>
        <Grid item lg = {3}>
                <Button onClick={generateOTP} full style={{ marginLeft:20 , marginTop:30 , marginBottom:30 , marginRight: 20}} variant="outlined" color="inherit">
                        Generate OTP
                </Button>
        </Grid>

    

        </Grid>
       

   

    <TextField
        value={OTP}
        variant="outlined"
        label="Enter OTP"
        className="otp"
        inputProps={{
            maxlength: 6
          }}
          errorText ={error}
        type="password"
        style={{marginLeft:20 , marginTop:30 , marginBottom:30 , marginRight: 20}}
        onChange={handleOTPChange}
        >

    </TextField>
    <Button >
        Verify
    </Button>


      </Dialog>
    </div>
  );
}
