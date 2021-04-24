import React from 'react'
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
import CourseList from './CourseList';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, useTheme } from '@material-ui/styles';
import SheetUpload from './EmailService';
export default function Gmail()
{
    

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

    const handleUpdate = (event) => {
        if(event.target.checked==true){
            console.log(event.target.name);
            setList(()=>[...list,event.target.name]);
        }
        else{
            var ls=[];
            for(var i in list){
                if(list[i]==event.target.name)
                    continue;
                ls.push(list[i]);
            }
            console.log(ls);
            setList(ls);
        }
    }

    const [list,setList]=React.useState([]);
    return(
        <div>
           
                <div >
                    <div >
                        <Typography className="py-0 sm:py-24 text-60 text-orange" variant="h4">Easy Mailing </Typography>
                    </div> 
                    <div >
                        <Typography className="py-0 sm:py-24 text-20 " variant="h4">Upload, Select,  Click,   Boom!!!! Mails Sent </Typography>
                    </div>
                </div>
            

                <div>
                <SheetUpload color="inherit" row={rows} columns={columns} subject={subject} body={body} list={list} setColumns={setColumns.bind(this)} setRows={setRows.bind(this)} />
            </div> 
    
            <div >
                {rows == null && columns == null ?
                                <Typography color="inherit" className="text-24 sm:text-40 font-light">
                                Upload Your File Here
                                </Typography> 
                                : null}
            </div>
            <div>
                {rows != null && columns != null ?
                       <Container>
                        {rows != null && columns != null ?
                            <CourseList columns={columns} data={rows} />
                            
                            : null}
                        {/* <ListItem>
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
                        ></TextField> */}
                   </Container>
                        :null}
            </div>
             
         
            
            </div>     
            

    );

}