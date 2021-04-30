import React from "react";
import { FusePageCarded } from '@fuse';
import MailHeader from './MailHeader.js'
import { FuseAnimate, FuseAnimateGroup, FusePageSimple } from '@fuse'
import SideBarHeader from './SideBarHeader.js'
import SideBarContent from './SideBarContent'
import RichTextEditor from './TinyMce'
import { Editor } from '@tinymce/tinymce-react';

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
    ListItem
} from '@material-ui/core';
import CourseList from '../usables/CourseList'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, useTheme } from '@material-ui/styles';
import SheetUpload from './SheetUpload';



export default function NewLook(props) {
    const [columns, setColumns] = React.useState(null);
    const [rows, setRows] = React.useState(null);
    const [subject, setSubject] = React.useState(null);
    const [body, setBody] = React.useState(null);
    const [list, setList] = React.useState([]);
    const [content,setContent]=React.useState(null)
    
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    }
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }
    const [emailBody, setEmailBody]=React.useState('1');
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
    return (
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
                    <Divider style={{color:"red" }}/>
                    {rows != null && columns != null ?
                    <Grid container lg = {12} >
                        <Divider />
                        <Grid item lg ={2}>                          
                            <SideBarContent columns = {columns}></SideBarContent>
                        </Grid>
                        <Grid item lg = {10}>

                           
                            <Container>
                            
                                <TextField
                                    id="Subject"
                                    label="Subject"

                                    helperText="Please select Subject of Email"
                                    onChange={handleSubjectChange}
                                ></TextField>
                                <br></br>
                                <TextField
                                    id="body"
                                    label="body"
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
    );
}