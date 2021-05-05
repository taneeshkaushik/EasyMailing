import React from "react";
import { FusePageCarded } from '@fuse';
import MailHeader from './MailHeader.js'
import { FuseAnimate, FuseAnimateGroup, FusePageSimple } from '@fuse'
import SideBarHeader from './SideBarHeader.js'
import SideBarContent from './SideBarContent'
import RichTextEditor from './TinyMce'
import { Editor } from '@tinymce/tinymce-react';
import JoyRide from "react-joyride";
import Preview from './Preview.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tutorial from './Tutorial';

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

import { useEffect, useState, useRef } from 'react';
import { readString } from 'react-papaparse';
import { gapi } from 'gapi-script';
import { encode, decode } from 'js-base64';
import ProgressBar from '../usables/ProgressBar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CircularProgress from '@material-ui/core/CircularProgress';

import AboutUs from './AboutUs';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function NewLook(props) {

    const classes = useStyles();
    const [fileState, setFileState] = React.useState({});
    const [signedInUser, setSignedInUser] = useState(null);
    const [isLoadingGoogleMailApi, setIsLoadingGoogleMailApi] = useState(false);
    const [isApiLoaded, setIsApiLoaded] = useState(false);
    const [logoutstatus,setLogout]=React.useState(false);
    const [cnt, setCnt] = useState(0);
    const [openAbout ,setOpenAbout] = React.useState(false);

    const [columns, setColumns] = React.useState(null);
    const [rows, setRows] = React.useState(null);
    const [subject, setSubject] = React.useState('');
    const [body, setBody] = React.useState('');
    const [list, setList] = React.useState([]);
    const [content, setContent] = React.useState(null)
    const FIRST_TOUR = [
        {
            target: ".takeinput",
            content: "Choose a  CSV file to tour more in Webiste from which you want to send emails it should have a column email in it for sure.",
            disableBeacon: true,
        },
        {
            target: ".finaltable",
            content: "This is the csv file you uploaded, you can sort by clicking on the table, you can also filter by clicking filter",
            disableBeacon: true,
        },
        {
            target: ".subject",
            content: "Here you can add the subject for the mail.",
            disableBeacon: true,
        },
        {
            target: ".body",
            content: "Here you can add the body of the email.",
            disableBeacon: true,
        },
        {
            target: ".columnlist",
            content: "Here you can select which columns from the sheet to send to recipeints. ",
            disableBeacon: true,
        },
        {
            target: ".preview",
            content: "Here you can have the preview of the email",
            disableBeacon: true,
        },
        {
            target: ".send",
            content: "Send Email from here",
            disableBeacon: true,
        }
    ];

    const [run1, setRun1] = React.useState(false);
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    }
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }
    const [emailBody, setEmailBody] = React.useState('1');
    const handleEditorChange = (content, event) => {
        setEmailBody(content);
    }

    const handleUpdate = (event) => {
        if (event.target.checked == true) {
            console.log(event.target.name);
            setList(() => [...list, event.target.name]);
        }
        else {
            var ls = [];
            for (var i in list) {
                if (list[i] == event.target.name)
                    continue;
                ls.push(list[i]);
            }
            console.log(ls);
            setList(ls);
        }
    }
    const [previewOpen, setPreviewOpen] = React.useState(false);
    const [openTutorial, setOpenTutorial] = React.useState(false);

    
    const onFileChange = (event) => {

        if(event.target.files[0]==undefined)
            return; 
        
        setFileState({ selectedFile: event.target.files[0] });
        console.log(event.target.result);
        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = (event.target.result)
            console.log(text.length);
            var row_temp = readString(text).data;
            console.log(row_temp);
            // var x = {};
            // for (var i =0 ;i< row_temp.length-1 ; i++)
            // {
            //     x[i]=true;
            // }
            // setCheckedState(x);
            var col_setup = [];
            var row_setup = [];
            // col_setup.push({
            //     Header: () => (
            //                     <Checkbox
                                    
            //                         ref = {ref}
            //                         onClick={(event) => {
            //                         event.stopPropagation();
            //                         }}
            //                         checked={checkall}
            //                         onChange={handleChangeAll}
                                
            //                     />
            //                     ),
            //                     accessor: "",
            //                     Cell: row => {
            //                     return (<Checkbox
                
            //                         name = {row.index}
            //                         checked={checklist[row.index]}
            //                         onChange = {handleChecked}
            //                         onClick={(event) => {
            //                         event.stopPropagation();
            //                         }}
               
            //                     />
            //                     )
            //                     },
            //                     className: "justify-center",
            //                     sortable: false,
            //                     width: 64
            //                 }
            //     )
            for (var i = 0; i < row_temp[0].length; i++) {
                col_setup.push({
                    Header: row_temp[0][i],
                    accessor: row_temp[0][i],
                    sortable: true,
                    filterable: true,
                    className: "font-bold justify-center",
                });
            }
            
            // console.log(col_setup);
            for (var i = 1; i < row_temp.length && row_temp[i].length > 1; i++) {
                var temp = {};
                for (var j = 0; j < row_temp[i].length; j++) {
                    temp[row_temp[0][j]] = row_temp[i][j];
                }
                row_setup.push(temp);
            }
            console.log(row_setup);
            setColumns(col_setup);
            setRows(row_setup);
        };
        reader.readAsText(event.target.files[0])
        setCnt(0);
    }

    var CLIENT_ID = '1067508074985-pgsioeadhbkpv79l18dvodcunr5cgkp9.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyBV24FXBh_gW7rHUkDwT6f_I7SicqtaBTM';

    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

    var SCOPES = 'https://mail.google.com/';
    const [user, setUser] = useState();
    const handleClientLoad = () => {
        gapi.load('client:auth2', initClient);
    };
    const initClient = () => {
        setIsLoadingGoogleMailApi(true);
        gapi.client
            .init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })
            .then(
                function () {
                    // Listen for sign-in state changes.
                    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                    console.log('inside');

                    // Handle the initial sign-in state.
                    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                },
                function (error) { }
            );
    };
    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            // Set the signed in user
            console.log(gapi.auth2.getAuthInstance().currentUser)
            setSignedInUser(gapi.auth2.getAuthInstance().currentUser.le.wt);
            setIsLoadingGoogleMailApi(false);
            setIsApiLoaded(true);
            // list files if user is authenticated
           
        }
        else{
            if(logoutstatus==false)
                handleAuthClick();
            else
                setLogout(false);
        }
    };
    /**
    * List files.
    */
    function sendMail() {
        var subject = 'Subject: '+subject+'\n\n';
        console.log(emailBody)
        rows.map((value,index) => {
            console.log(index);
            var msg = 'To: ' + '<' + value.email + '>' + '\n';
            msg += subject + body + '\n' ;
            // msg+='Content-Type: '+'text/html; charset=UTF-8\n';
            msg+=emailBody+'\n';
            for (var i in value) {
                if (i == 'email' )
                    continue;
                if (list.indexOf(i)==-1)
                    continue
                msg += i;
                msg += ' :- ';
                msg += value[i];
                msg += '\n';
            }
            gapi.client.gmail.users.messages.send({
                'userId': 'me',
                "raw": msg
            }).then(function (response) {
                // alert("Email sent successfully");
            setCnt((prevProgress) => (prevProgress +  (100 / rows.length) )>100?100:prevProgress +  (100 / rows.length));
            })
                .catch((err) => {
                    console.log(err);
                });
            setCnt((prevProgress) => (prevProgress +  (100 / rows.length) )>100?100:prevProgress +  (100 / rows.length));
        });
            // const tempcnt=cnt;
        // setCnt(tempcnt+(100/rows.length))
    }


    /**
     *  Sign in the user upon button click.
     */
    const handleAuthClick = (event) => {
        gapi.auth2.getAuthInstance().signIn();
    };
    const logout=(event) => {
        if (gapi.auth2.getAuthInstance().currentUser){
            gapi.auth2.getAuthInstance().signOut().then(()=>{
                alert('Signed Out Successfully');
                setSignedInUser(null);
                setLogout(true);
            });
        }
    }


    function resetHandle(){
        document.getElementById('fileInput').value = '';
        setRows(null);
        setColumns(null);
        // window.location.reload()
    }


    return (
        <>

        <div style={{backgroundColor:"#0e1e25"}} className="min-h-300 h-300 justify-center">
        <Button style={{color:"white" }} component="span" className={classes.button} onClick={() => { setOpenAbout(true) }}>
            About Us
        </Button>
        {signedInUser!=null?<Button variant="outlined" style={{color:"white" }} component="span" className={classes.button}  onClick={logout}>Logout</Button>:<Button variant="outlined" style={{color:"white"}} component="span" className={classes.button} onClick={handleClientLoad}>Login</Button>}

        
    </div>
            <div className="demo-wrapper">
                <JoyRide
                    callback={(data) => {
                        const { status, type } = data;
                        const finishedStatuses = ['finished', 'skipped'];

                        if (finishedStatuses.includes(status)) {
                            setRun1(false);
                        }
                    }}
                    steps={FIRST_TOUR}
                    continuous={true}
                    scrollToFirstStep={true}
                    showProgress={true}
                    spotlightClicks={true}
                    showSkipButton={true}
                    run={run1}
                />
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
                        <div>
                        {rows != null && columns != null?<Button variant="outlined" color="inherit" component="span" className={classes.button+" send"}  onClick={() => {sendMail()}}>Send Email</Button>:null}

                        <ListItem>
                                <ProgressBar color ='secondary' progress ={cnt} />
                                <div className='p-5'>
                                    {cnt>=100 ?<DoneAllIcon color='secondary'></DoneAllIcon>:null}
                                </div>
                        </ListItem>
                        {rows != null && columns != null ? <Button className={"preview"} variant="outlined" color="primary" component="span" style={{color:"Purple", justify:"center"}} onClick={() => { setPreviewOpen(true) }}>Preview</Button> : null}
                        {rows != null && columns != null ? <Button color="primary" variant="outlined" style={{color:"Purple", justify:"center"}} onClick={resetHandle}>Reset</Button>: null}
                        {previewOpen == true ? <Preview columns={list} body={body} subject={subject} setPreviewOpen={setPreviewOpen} ></Preview> : null}
                        <Button className="tutorial" variant="outlined" color="primary" component="span" onClick={()=>{setOpenTutorial(true)}} style={{color:"Purple", justify:"center"}} >Tutorial</Button>
                        <Button variant="outlined" color="primary" component="span" onClick={()=>{setRun1(true)}} style={{color:"Purple", justify:"center"}} >Take Tour </Button>
                        {openAbout == true ? <AboutUs setOpenAbout = {setOpenAbout} ></AboutUs> : null}
                        {openTutorial == true ? <Tutorial  setOpenTutorial={setOpenTutorial}></Tutorial> : null}
                        </div>

                      
        
                        
                        {rows != null && columns != null ?
                            <Grid container lg={12} >
                                <Divider />
                                <Grid item lg={2}>
                                    <SideBarContent columns={columns} handleUpdate={handleUpdate}></SideBarContent>
                                </Grid>
                                <Grid container style={{marginTop:30}} lg={10}>
                                    
                                        <Grid  item lg ={4}>

                                        <TextField
                                        
                                            variant="outlined"
                                            label="Subject"
                                            className="subject"
                                            helperText="Please select Subject of Email"
                                            onChange={handleSubjectChange}
                                        ></TextField>
                                        </Grid>
                                        <Grid item lg ={7}>
                                        <TextField
                                            label="body"
                                            className="body"
                                            helperText="Please Enter Opening Remarks of Email"
                                            multiline
                                            fullWidth
                                            variant="outlined"
                                            minRows={6}
                                            onChange={handleBodyChange}
                                        ></TextField>
                                        </Grid>

                                        
                                        
                                      <Grid item lg={11}>

                                      <CourseList columns={columns} data={rows}  />

                                      </Grid>

                                    
                                </Grid>
                            </Grid>
                            : null}
                    </FuseAnimateGroup>

                }

            ></FusePageCarded>
        </>
    );
}