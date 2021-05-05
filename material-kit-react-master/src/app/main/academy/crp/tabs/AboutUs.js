import React from "react";
import { FusePageCarded } from '@fuse';
import MailHeader from './MailHeader.js'
import { FuseAnimate, FuseAnimateGroup, FusePageSimple } from '@fuse'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import {
    Button,
    Card,
    Grid,
    CardContent,
    OutlinedInput,
    Icon,
    TextField,
    Typography,
    CardActions,
    Divider,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    LinearProgress,
    Container,
    Checkbox,
    ListItem,
    Dialog
} from '@material-ui/core';
import CourseList from '../usables/CourseList'
import { makeStyles  } from '@material-ui/styles';
// import SheetUpload from './SheetUpload';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function NewLook(props) {

    return (
        <>
        <div style={{backgroundColor:"#0e1e25"}} className="min-h-300 h-300 justify-center">
        <Button style={{color:"white" }} component="span" className={classes.button} onClick={() => { setOpenAbout(true) }}>
            About Us
        </Button>
        {signedInUser!=null?<Button variant="outlined" style={{color:"white" }} component="span" className={classes.button}  onClick={logout}>Logout</Button>:<Button variant="outlined" style={{color:"white"}} component="span" className={classes.button} onClick={handleClientLoad}>Login</Button>}

    </div>
            <FusePageCarded
                classes={{
                    header: "min-h-300 h-300 justify-center",
                }}
                header={
                    <div>
                          
                    <div className="justify-center items-center">
                            {/* <AppBar className="flex flex-col justify-center flex-1"  > */}
                                
                        <div className="flex flex-col justify-center flex-1 ">
                            <FuseAnimateGroup>
                                  
                                <div className="flex justify-center items-center">
                                    
                                    <Typography className="py-0 sm:py-24 text-60 text-green" variant="h4"> ESMP </Typography>
                                </div>
                                {/* <Button onClick={logout}>Logout</Button> */}
                                <div className="flex justify-center items-center">
                                    <p className="py-0 sm:py-24 text-20 " variant="h4"> Upload, Select, Click, Boom!!!  Mails Sent 
                                    <br></br> 
                                    We respect privacy. We do not collect any data.  </p>                         
                                    
                                </div>
                            </FuseAnimateGroup>
                        </div>
                        </div>
               
                    </div>
                }

                content={
                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                        className="flex justify-center flex-wrap py-24"
                    >
                        <div className='flex justify-center p-30'>
                            {/* <SheetUpload color="inherit" row={rows} emailBody={emailBody} columns={columns} subject={subject} body={body} list={list} setColumns={setColumns.bind(this)} setRows={setRows.bind(this)} /> */}
                            <input id="fileInput" className="takeinput" color="inherit" type="file" accept='.csv' onChange={onFileChange} onClick={()=>{setCnt(0)}}/>
                            <label htmlFor="outlined-button-file">
                            </label>
                    
                        </div>
                        
    
              
                    </FuseAnimateGroup>

                }

            ></FusePageCarded>
        </>
    );
}