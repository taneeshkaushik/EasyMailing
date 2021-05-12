import React, { useState } from 'react';
import { makeStyles  } from '@material-ui/styles';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar , Dialog , TextField, Container , Button , Grid , CircularProgress} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MailPreview from './MailPreview'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import AboutUsComponent from './AboutUsComponent';
import { setDefaultSettings } from 'app/store/actions';

var CryptoJS = require("crypto-js");


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
  const [emailOTP , setEmailOTP] = useState(null);
  const [error , setError] = useState("");

  function decrypt(ciphertext, secretKey){

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;

  }
  const [flag , setFlag] = useState(false);

  function generateOTP() {
    setFlag(true);
    
    axios.post('http://localhost:8081/api/get-otp' , {'email' : email}).then(function(response){

    
    // console.log(response);
     setEmailOTP(response.data.otp);

    }).
    catch(function(error){
      console.log(error)
    })
      

  }
  function handleOTPChange(e) {
      setOTP(e.target.value)
  }



  const  handleEmailChange= (e) =>{


    setEmail(e.target.value);


  }

  function verifyOTP(){

    // decrypt();
    // if(OTP === emailOTP)
    if(OTP.slice(0,6) === decrypt(emailOTP , OTP.slice(6)) )
    {
      props.setAuthentication(true);
      props.setEmailID(email)
      alert("OTP IS CORRECT");
    }
    else{
      alert("Incorrect OTP");
    }
    handleClose()
  }

  const handleClose = () => {
    props.setOpenLoginModal(false);
    setEmail("");
    setOTP("");
    setEmailOTP(null);
  };

  return (
    <div>

      <Dialog fullWidth open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon/> 
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
                <Button onClick={generateOTP} full style={{ marginLeft:20 , marginTop:30 , marginBottom:30 }} variant="outlined" color="inherit">
                        Generate OTP
                </Button>
        </Grid>

    

        </Grid>    
       
    {
      emailOTP != null ? 
      <div>
     
      <TextField
          value={OTP}
          variant="outlined"
          label="Enter OTP"
          className="otp"

          type="password"
          style={{marginLeft:20 , marginTop:30 , marginBottom:30 , marginRight: 20}}
          onChange={handleOTPChange}
          >
  
      </TextField>
      <Button onClick = {verifyOTP}   style={{marginLeft:20 , marginTop:30 , marginBottom:30 , marginRight: 20}}>
          Verify
      </Button>
  
      </div>
      
      : flag == true ? <CircularProgress style = {{marginLeft: 100}}/> : null

    }
   



      </Dialog>
    </div>
  );
}
