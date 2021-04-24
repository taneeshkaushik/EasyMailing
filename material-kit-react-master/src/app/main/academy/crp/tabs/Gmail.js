import React from 'react'
import {FuseAnimate, FuseAnimateGroup, FusePageSimple} from '@fuse'
import { 
    Button,
    Card,
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
    ListItem} from '@material-ui/core';
import CourseList from '../usables/CourseList'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, useTheme } from '@material-ui/styles';
import SheetUpload from './SheetUpload';
export default function Gmail()
{
    const useStyles = makeStyles(theme => ({
        header: {
            background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
            color: theme.palette.getContrastText(theme.palette.primary.main)
        },
        headerIcon: {
            position: 'absolute',
            top: -64,
            left: 0,
            opacity: .04,
            fontSize: 512,
            width: 512,
            height: 512,
            pointerEvents: 'none'
        }
    }));

    const [columns, setColumns] = React.useState(null);
    const [rows, setRows] = React.useState(null);
    const [subject, setSubject] = React.useState(null);
    const [body, setBody] = React.useState(null);

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    }
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }

    const handleUpdate=(e) =>{
        // setColumns(e.target.value)
    };

    const [list,setCheckList]=React.useState([]);
    return(
        <FusePageSimple 
        classes={{
            header      : "min-h-160 h-160",
        }}

        header={
           
                <div className="flex flex-col justify-center flex-1 ">
                    <FuseAnimateGroup>
                    <div className="flex justify-center items-center">
                        <Typography className="py-0 sm:py-24 text-60 text-orange" variant="h4">Easy Mailing </Typography>
                    </div> 
                    <div className="flex justify-center items-center">
                        <Typography className="py-0 sm:py-24 text-20 " variant="h4">Upload, Select,  Click Boom!!!! Mails Sent </Typography>
                    </div>
                    </FuseAnimateGroup>
                </div>
            
        }

        content={
            <div>
            <div className='flex justify-center p-24'>
                {rows == null && columns == null ?
                                <Typography color="inherit" className="text-24 sm:text-40 font-light">
                                Upload Your File Here
                                </Typography> 
                                : null}
            </div>
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn"
                }}
                className="flex flex-wrap py-24"
            >
                {rows != null && columns != null ?
                       <Container>
                        {rows != null && columns != null ?
                            <CourseList columns={columns} data={rows} />
                            : null}
                        <ListItem>
                        {rows != null && columns != null ?
                            columns.map((value) => {
                                if (value.Header != 'email')
                                    return (
                                        <div>
                                            <Checkbox
                                                name={value.Header}
                                                onChange={handleUpdate}
                                            />
                                            <label>{value.Header}</label>
                                        </div>
                                    );
                                else
                                    return null;
                            })
                            : null}
                        <br></br>
                        
                        </ListItem> 
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
                            onChange={handleBodyChange}
                        ></TextField>
                   </Container>
                        :null}
            </FuseAnimateGroup>
             
            <div className='flex justify-center p-24'>
                <SheetUpload color="inherit" row={rows} columns={columns} subject={subject} body={body} list={list} setColumns={setColumns.bind(this)} setRows={setRows.bind(this)} />
            </div> 
            
            </div>     
            
        }
        >
            
        </FusePageSimple>
    )

}
