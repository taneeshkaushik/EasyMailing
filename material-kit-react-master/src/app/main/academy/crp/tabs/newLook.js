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
    ListItem,
    Dialog
} from '@material-ui/core';
import CourseList from '../usables/CourseList'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, useTheme } from '@material-ui/styles';
import SheetUpload from './SheetUpload';



export default function NewLook(props) {
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

                    <div className="justify-center items-center">
                        <div className="flex flex-col justify-center flex-1 ">
                            <FuseAnimateGroup>
                                <div className="flex justify-center items-center">
                                    <Typography className="py-0 sm:py-24 text-60 text-green" variant="h4">Easy Mailing </Typography>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Typography className="py-0 sm:py-24 text-20 " variant="h4">Upload, Select,  Click,   Boom!!!! Mails Sent </Typography>
                                </div>
                            </FuseAnimateGroup>
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
                            <SheetUpload color="inherit" row={rows} emailBody={emailBody} columns={columns} subject={subject} body={body} list={list} setColumns={setColumns.bind(this)} setRows={setRows.bind(this)} />
                            

                        </div>
                        {rows != null && columns != null ? <Button className={"preview"} variant="outlined" color="primary" component="span" style={{color:"Purple", justify:"center"}} onClick={() => { setPreviewOpen(true) }}>Preview</Button> : null}
                        {previewOpen == true ? <Preview columns={list} body={body} subject={subject} setPreviewOpen={setPreviewOpen} ></Preview> : null}
                        <Button className="tutorial" variant="outlined" color="primary" component="span" onClick={()=>{setOpenTutorial(true)}} style={{color:"Purple", justify:"center"}} >Tutorial</Button>
                        <Button variant="outlined" color="primary" component="span" onClick={()=>{setRun1(true)}} style={{color:"Purple", justify:"center"}} >Take Tour </Button>

                        {openTutorial == true ? <Tutorial  setOpenTutorial={setOpenTutorial}></Tutorial> : null}
                        
        
                        
                        {rows != null && columns != null ?
                            <Grid container lg={12} >
                                <Divider />
                                <Grid item lg={2}>
                                    <SideBarContent columns={columns} handleUpdate={handleUpdate}></SideBarContent>
                                </Grid>
                                <Grid item lg={10}>
                                    <Container>

                                        <TextField
                                            label="Subject"
                                            className="subject"
                                            helperText="Please select Subject of Email"
                                            onChange={handleSubjectChange}
                                        ></TextField>
                                        <br></br>
                                        <TextField
                                            label="body"
                                            className="body"
                                            helperText="Please Enter Opening Remarks of mail"
                                            multiline
                                            variant="outlined"
                                            minRows={5}
                                            onChange={handleBodyChange}
                                        ></TextField>

                                        <CourseList columns={columns} data={rows} />

                                    </Container>
                                </Grid>
                            </Grid>
                            : null}
                    </FuseAnimateGroup>

                }

            ></FusePageCarded>
        </>
    );
}