import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, useRef } from 'react';
import { readString } from 'react-papaparse';
import CourseList from '../usables/CourseList'
import axios from 'axios';
import { gapi } from 'gapi-script';
import { encode, decode } from 'js-base64';
import TextField from '@material-ui/core/TextField';
import ProgressBar from '../usables/ProgressBar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {ListItem , Checkbox , Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));
export default function SheetUpload(props) {
    const classes = useStyles();
    const [fileState, setFileState] = React.useState({});
    const [signedInUser, setSignedInUser] = useState();
    const [isLoadingGoogleMailApi, setIsLoadingGoogleMailApi] = useState(false);
    const [isApiLoaded, setIsApiLoaded] = useState(false);
    const [cnt, setCnt] = useState(0);
    let f = 0;

    const [checklist , setCheckedState] = useState(props.hardcode);
    const [checkall , setCheckAll] = useState(false);
    const ref = useRef();
    console.log("THis is checklist" , checklist);

    const handleChecked = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        let t = [...checklist];
        
        t[event.target.name]= event.target.checked;
        setCheckedState(t);
        // setCheckedState({ ...checklist, [event.target.name]: event.target.checked });
    };

      function handleChangeAll(event){

        setCheckAll(!checkall);
        const x ={};
        if (checkall == true){
    
          Object.keys(checklist).forEach(function(key) {
            // console.log(key, checklist[key]);
            x[key] = false
      
            });
    
    
        }
        else{
         
          Object.keys(checklist).forEach(function(key) {
            // console.log(key, checklist[key]);
            x[key] = true
      
            });
        }
        setCheckedState(x);

        // ref.current.target = checkall;
    
      }
    
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
            props.setColumns(col_setup);
            props.setRows(row_setup);
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
                    //gapi.auth2.getAuthInstance().signOut();
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
            var subject = 'Subject: '+props.subject+'\n\n';
            console.log(props.emailBody)
            props.row.map((value,index) => {
                console.log(index);
                var msg = 'To: ' + '<' + value.email + '>' + '\n';
                msg += subject + props.body + '\n' ;
                msg+='Content-Type: '+'text/html; charset=UTF-8\n';
                msg+=props.emailBody+'\n';
                for (var i in value) {
                    if (i == 'email' )
                        continue;
                    if (props.list.indexOf(i)==-1)
                        continue
                    msg += i;
                    msg += ' :- ';
                    msg += value[i];
                    msg += '\n';
                }
                
                sendMail(encode(msg));
            });
           
        } else {
            // prompt user to sign in
            handleAuthClick();
        }
    };

    /**
    * List files.
    */
    function sendMail(message) {
        gapi.client.gmail.users.messages.send({
            'userId': 'me',
            "raw": message
        }).then(function (response) {
            // alert("Email sent successfully");
        setCnt((prevProgress) => (prevProgress >= 100 ? prevProgress : prevProgress +  (100 / props.row.length) ));

        })
            .catch((err) => {
                console.log(err);
            });
        setCnt((prevProgress) => (prevProgress >= 100 ? prevProgress : prevProgress +  (100 / props.row.length) ));
    }


    /**
     *  Sign in the user upon button click.
     */
    const handleAuthClick = (event) => {
        gapi.auth2.getAuthInstance().signIn();
    };
    return (
        <div>
            <input color="inherit" type="file" accept='.csv' onChange={onFileChange} onClick={()=>{setCnt(0)}}/>
            <label htmlFor="outlined-button-file">
    
            </label>
            {/* {rows != null && columns != null ? <CourseList columns={columns} data={rows} /> : null} */}
            <Button variant="outlined" color="inherit" component="span" className={classes.button} onClick={() => { handleClientLoad() }}>
                Send Email
            </Button>

            <ListItem>
                <ProgressBar color ='secondary' progress ={cnt} />
                <div className='p-5'>
                    {cnt>=100 ?<DoneAllIcon color='secondary'></DoneAllIcon>:null}
                </div>
            </ListItem>
            
        </div>
    );
}