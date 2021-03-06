import React from "react";
import { FusePageCarded } from '@fuse';
import MailHeader from './MailHeader.js'
import { FuseAnimate, FuseAnimateGroup, FusePageSimple } from '@fuse'
import SideBarHeader from './SideBarHeader.js'
import SideBarContent from './SideBarContent'
import { Editor } from '@tinymce/tinymce-react';
import JoyRide from "react-joyride";
import Preview from './Preview.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tutorial from './Tutorial';
import LoginModal from './LoginModal';
import AboutUs from './AboutUs';



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
    Dialog,
    Avatar,
} from '@material-ui/core';
import CourseList from '../usables/CourseList'
import { makeStyles } from '@material-ui/styles';
// import SheetUpload from './SheetUpload';

import { useEffect, useState, useRef } from 'react';
import { readString } from 'react-papaparse';
import { gapi } from 'gapi-script';
import { encode, decode } from 'js-base64';
import ProgressBar from '../usables/ProgressBar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CircularProgress from '@material-ui/core/CircularProgress';
import axiosInstance from "app/main/axios.js";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function NewLook(props) {
    const [emailId, setEmailID] = useState("")
    const [isAuthenticated, setAuthentication] = useState(false);
    const classes = useStyles();
    const [fileState, setFileState] = React.useState({});
    const [signedInUser, setSignedInUser] = useState(null);
    const [isLoadingGoogleMailApi, setIsLoadingGoogleMailApi] = useState(false);
    const [isApiLoaded, setIsApiLoaded] = useState(false);
    const [logoutStatus, setLogout] = React.useState(false);
    const [cnt, setCnt] = useState(0);
    const [openAbout, setOpenAbout] = React.useState(false);
    const [columns, setColumns] = React.useState(null);
    const [rows, setRows] = React.useState(null);
    const [sub, setSubject] = React.useState('');
    const [body, setBody] = React.useState('');
    const [list, setList] = React.useState([]);
    const [content, setContent] = React.useState(null);

    const FIRST_TOUR = [
        {
            target: ".aboutus",
            content: "Click here to know about us and the product.",
            disableBeacon: true,
        },
        {
            target: ".tutorial",
            content: "Refer here for a more detailed tutorial",
            disableBeacon: true,
        },
        {
            target: ".auth",
            content: "Authenticate yourself to send mails using our email id.",
            disableBeacon: true,
        },
        {
            target: ".login",
            content: "You can login from here using your gmail account.If the Send Email button is not visible after sheet upload then press here.",
            disableBeacon: true,
        },
        {
            target: ".takeinput",
            content: "Choose a  CSV file to tour more in Website from which you want to send emails it should have a column email in it for sure.",
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
        },
        {
            target: ".reset",
            content: "Reset the page from here",
            disableBeacon: true,
        }
    ];

    function sendEmailUsingESMP() {

        setCnt(0);
        // var ctype="Content-type: text/html;charset=iso-8859-1\n\n"
        // //console.log(emailBody)
        ////console.log(list);
        var new_list = [...list];
        ////console.log(new_list);
        for (var i = 0; i < new_list.length; i++) {
            new_list[i] = new_list[i].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
        }
        ////console.log(new_list);
        // ////console.log(list);
        rows.map((value, index) => {
            var rowlist = [];
            for (var i in value) {
                var msg = ' ';
                // //console.log(i,value[i]);
                //console.log(i.toLowerCase());
                if (i.toLowerCase() == 'email')
                    continue;
                if (new_list.indexOf(i) == -1)
                    continue
                var ind = new_list.indexOf(i);
                msg += list[ind];
                msg += ' :- ';
                msg += value[i];

                rowlist.push(msg);

            }


            // api call here 
            axiosInstance.post('/api/sendMail',
                {
                    'from': emailId,
                    'to': value.email,
                    'subject': `${sub} (by ${emailId})`,
                    'text': body,
                    'table': rowlist,

                }).then(function (response) {

                    // //console.log(response);
                    setCnt((prevProgress) => (prevProgress + (100 / rows.length)) > 100 ? 100 : prevProgress + (100 / rows.length));

                }).
                catch(function (error) {
                    //console.log(error)
                })


        });

    }

    const [run1, setRun1] = React.useState(false);
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    }
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }
    const [emailBody, setEmailBody] = React.useState('');
    const handleEditorChange = (content, event) => {
        setEmailBody(content);
    }

    const handleUpdate = (event) => {
        if (event.target.checked == true) {
            //console.log(event.target.name);
            setList(() => [...list, event.target.name]);
        }
        else {
            var ls = [];
            for (var i in list) {
                if (list[i] == event.target.name)
                    continue;
                ls.push(list[i]);
            }
            //console.log(ls);
            setList(ls);
        }
    }
    const [previewOpen, setPreviewOpen] = React.useState(false);
    const [openTutorial, setOpenTutorial] = React.useState(false);
    const [openLogin, setOpenLoginModal] = React.useState(false);
    const [loggedOut, setLoggedOut] = React.useState(false);
    const onFileChange = (event) => {


        if (event.target.files[0] == undefined)
            return;
        setFileState({ selectedFile: event.target.files[0] });
        //console.log(event.target.result);
        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = (event.target.result)
            //console.log(text.length);
            var row_temp = readString(text).data;

            var col_setup = [];
            var row_setup = [];

            var isEmail = false;
            for (var i = 0; i < row_temp[0].length; i++) {
                col_setup.push({
                    Header: row_temp[0][i],
                    accessor: row_temp[0][i].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase(),
                    sortable: true,
                    filterable: true,
                    className: "font-bold justify-center",
                });
                if (row_temp[0][i].toLowerCase() == 'email')
                    isEmail = true;
            }

            // //console.log(col_setup);
            for (var i = 1; i < row_temp.length && row_temp[i].length > 1; i++) {
                var temp = {};
                for (var j = 0; j < row_temp[i].length; j++) {
                    temp[row_temp[0][j].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase()] = row_temp[i][j];
                }
                row_setup.push(temp);
            }
            //console.log(row_setup);
            if (isEmail) {
                setColumns(col_setup);
                setRows(row_setup);
            }
            else {
                alert("Email field not found");
            }
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

        setEmailID("");
        setAuthentication(false);
    };
    useEffect(() => {
        handleClientLoad();
    }, [props])
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
                    // console.log('init done');
                    setIsApiLoaded(true);
                    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                    //console.log('inside');
                    // Handle the initial sign-in state.
                    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                }
            ).catch((error) => {
                // console.log(error);
            })
    };
    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            // Set the signed in user
            //console.log(gapi.auth2.getAuthInstance().currentUser)
            // console.log('signed in');
            setSignedInUser(gapi.auth2.getAuthInstance().currentUser.le.wt);
            setIsLoadingGoogleMailApi(false);
            // list files if user is authenticated
        }
        else {
            // console.log('not signed in')
        }
    };
    /**
    * List files.
    */
    function sendMail() {
        var subject = 'Subject: ' + sub + '\n\n';
        // var ctype="Content-type: text/html;charset=iso-8859-1\n\n"
        //console.log(emailBody)
        //console.log(list);
        var new_list = [...list]
        //console.log(new_list);
        for (var i = 0; i < new_list.length; i++) {
            new_list[i] = new_list[i].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
        }
        //console.log(new_list);
        // //console.log(list);
        rows.map((value, index) => {
            var to = 'To: ' + '<' + value.email + '>' + '\r\n';
            var msg = to + subject + body + '\n';
            // //console.log(index);
            // //console.log(value);
            // msg+='Content-Type: '+'text/html; charset=UTF-8\n';
            // msg += emailBody + '\n';
            for (var i in value) {
                // //console.log(i,value[i]);
                //console.log(i.toLowerCase());
                if (i.toLowerCase() == 'email')
                    continue;
                if (new_list.indexOf(i) == -1)
                    continue
                var ind = new_list.indexOf(i);
                msg += list[ind];
                msg += ' :- ';
                msg += value[i];
                msg += '\n';
            }
            var temp = encode(msg);
            gapi.client.gmail.users.messages.send({
                'userId': 'me',
                "raw": temp
            }).then(function (response) {
                // alert("Email sent successfully");
                setCnt((prevProgress) => (prevProgress + (100 / rows.length)) > 100 ? 100 : prevProgress + (100 / rows.length));
            })
                .catch((err) => {
                    //console.log(err);
                });

        });
        // const tempcnt=cnt;
        // setCnt(tempcnt+(100/rows.length))
    }



    /**
     *  Sign in the user upon button click.
     */
    const handleAuthClick = (event) => {
        //console.log('authclick');
        if (signedInUser == null && isApiLoaded)
            gapi.auth2.getAuthInstance().signIn();
    };
    const logout = (event) => {
        gapi.auth2.getAuthInstance().signOut().then(() => {
            alert('Signed Out Successfully');
            setSignedInUser(null);
        });
    }
    // useEffect(() => {
    //     //console.log('useeffect');
    //     if (signedInUser == null && isApiLoaded)
    //         handleAuthClick();
    // }, [signedInUser])

    function resetHandle() {
        document.getElementById('fileInput').value = '';
        setRows(null);
        setSubject("");
        setBody("");
        setColumns(null);
        setList([]);
        setCnt(0);

        // window.location.reload()
    }


    function fileLoadHandle() {

        document.getElementById('fileInput').value = '';
        setRows(null);
        setColumns(null);
        setList([]);
        setCnt(0);


        // if(signedInUser == null && isAuthenticated == false)
        // {alert("Please Auth or ligin");
        // return} 

    }
    const ref = React.useRef();
    

    return (
        <>
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

                                    <div style={{ backgroundColor: "#0e1e25" }} className="min-h-300 h-300 justify-center">
                                        <Button style={{ color: "white" }} component="span" color="primary" className="aboutus" onClick={() => { setOpenAbout(true) }}>
                                            About Us
                                </Button>
                                        <Button className="tutorial" variant="outlined" color="primary" component="span" onClick={() => { setOpenTutorial(true) }} style={{ color: "white", justify: "center" }} >Tutorial</Button>
                                        <Button variant="outlined" color="primary" component="span" onClick={() => { setRun1(true) }} style={{ color: "white", justify: "center" }} >Take Tour </Button>
                                        {isAuthenticated ? <Button variant="outlined" style={{ color: "white" }} component="span" onClick={() => { setEmailID(""); setAuthentication(false) }}>Logout</Button> : <Button variant="outlined" className="auth" style={{ color: "white" }} onClick={() => { if (signedInUser != null) { logout(); setOpenLoginModal(true); } else { setOpenLoginModal(true); } }} component="span">Authenticate your Email ID</Button>}

                                        {signedInUser != null && isApiLoaded == true ? <Button variant="outlined" style={{ color: "white" }} component="span" className="login" onClick={logout}>Logout</Button> : <Button variant="outlined" style={{ color: "white" }} component="span" className="login" onClick={handleAuthClick}>Login to use your email id</Button>}

                                    </div>


                                    <div className="flex justify-center items-center" style={{ paddingTop: 50 }}>
                                        <Avatar src="/static/images/logo.jpeg" style={{ width: 150, height: 150 }} />
                                    </div>
                                    {/* <Button onClick={logout}>Logout</Button> */}
                                    <div className="flex justify-center items-center">
                                        <p className="py-0 sm:py-24 text-20 " variant="h4"> Easy and Secure Mailing Portal </p>
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

                            <input id="fileInput" className="takeinput" color="inherit" type="file" accept='.csv' onChange={onFileChange} onClick={() => { fileLoadHandle(); }} />
                            <label htmlFor="outlined-button-file">
                            </label>

                        </div>

                        <div>
                            {signedInUser != null || isAuthenticated != false ? rows != null && columns != null ? null : <Typography style={{ color: "green" }}>Load a csv to send email</Typography> : <Typography style={{ color: "red" }}>Please authenticate or login to send email</Typography>}

                            {signedInUser != null && isApiLoaded == true && rows != null && columns != null ? <Button variant="outlined" color="inherit" component="span" className={classes.button + " send"} onClick={() => { sendMail() }}>Send Email</Button> : null}
                            {isAuthenticated == true && rows != null && columns != null ? <Button style={{ color: "green" }} variant="outlined" onClick={sendEmailUsingESMP}>Send Email</Button> : null}

                            <ListItem>
                                <ProgressBar color='secondary' progress={cnt} />
                                <div className='p-5'>
                                    {cnt >= 100 ? <DoneAllIcon color='secondary'></DoneAllIcon> : null}
                                </div>
                            </ListItem>
                            {rows != null && columns != null ? <Button className={"preview"} variant="outlined" color="primary" component="span" style={{ color: "Purple", justify: "center" }} onClick={() => { setPreviewOpen(true) }}>Preview</Button> : null}
                            {rows != null && columns != null ? <Button className={"reset"} color="primary" variant="outlined" style={{ color: "Purple", justify: "center" }} onClick={resetHandle}>Reset</Button> : null}
                            {previewOpen == true ? <Preview columns={list} body={body} subject={sub} setPreviewOpen={setPreviewOpen} email={emailId} ></Preview> : null}
                            {openAbout == true ? <AboutUs setOpenAbout={setOpenAbout} ></AboutUs> : null}
                            {openTutorial == true ? <Tutorial setOpenTutorial={setOpenTutorial}></Tutorial> : null}
                            {openLogin == true ? <LoginModal setEmailID={setEmailID} setAuthentication={setAuthentication} setOpenLoginModal={setOpenLoginModal}></LoginModal> : null}

                        </div>
                        {rows != null && columns != null ?
                            <Grid container lg={12} paddingTop="100" >
                                <Grid container lg={2}>
                                    <SideBarContent columns={columns} handleUpdate={handleUpdate} ref={ref}></SideBarContent>
                                </Grid>
                                <Grid container style={{ marginTop: 30 }} lg={10}>

                                    <Grid container lg={3} justify='center' >
                                        <TextField
                                            value={sub}
                                            variant="outlined"
                                            label="Subject"
                                            className="subject"
                                            helperText="Please select Subject of Email"
                                            onChange={handleSubjectChange}
                                        ></TextField>
                                    </Grid>

                                    <Grid container lg={9} justify='center' className='body'  >
                                        {signedInUser != null ?

                                            <TextField
                                                label="body"
                                                className="body"
                                                helperText="enter the body of mail"
                                                multiline
                                                style={{ width: 600 }}
                                                value={body}
                                                variant="outlined"
                                                minRows={6}
                                                onChange={handleBodyChange}
                                            ></TextField>

                                            :
                                            <Editor
                                            apiKey='8dxnt8hpf0pmfmjxgoaddn2ibcb7561qslxqts96khscmwq2'
                                            
                                            inline_styles = 'true'
                                            
                                            init={{
                                            height: 400,
                                            width:800,
                                            placeholder:"enter the body of mail",
                                            table_use_colgroups: true,
                                            table_class_list: [
                                                {title: 'None', value: 'table_red_borders'},
                                              ],
                                            plugins: [
                                                'advlist autolink lists link image', 
                                                'charmap print preview anchor help',
                                                'searchreplace visualblocks code',
                                                'insertdatetime media table paste wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic |forecolor backcolor|\
                                                alignleft aligncenter alignright |  \
                                                bullist numlist outdent indent | preview help'
                                            
                                            }}
                                            onChange={(e)=>{setBody(e.target.getContent())}}
                                            />                                    
                                        }
                                    </Grid>

                                    <Grid item lg={11} justify='right'>
                                        <CourseList columns={columns} data={rows} />
                                    </Grid>
                                </Grid>
                            </Grid> : null}

                    </FuseAnimateGroup>
                }
            ></FusePageCarded>

        </>
    );
}