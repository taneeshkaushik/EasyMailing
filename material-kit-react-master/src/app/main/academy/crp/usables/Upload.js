import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, useRef } from 'react';
import { readString } from 'react-papaparse';
import CourseList from '../usables/CourseList'
import axios from 'axios';
import { gapi } from 'gapi-script';
import { encode, decode } from 'js-base64';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));
export default function Upload(props) {
    const classes = useStyles();
    const [fileState, setFileState] = React.useState({});
    const onFileChange = (event) => {
        setFileState({ selectedFile: event.target.files[0] });
        console.log(event.target.result);
        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = (event.target.result)
            console.log(text);
            var row_temp = readString(text).data;
            console.log(row_temp);
            var col_setup = [];
            var row_setup = [];
            for (var i = 0; i < row_temp[0].length; i++) {
                col_setup.push({
                    Header: row_temp[0][i],
                    accessor: row_temp[0][i],
                    sortable: true,
                    className: "font-bold justify-center",
                });
            }
            console.log(col_setup);
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
    }
    const onFileUpload = () => {
        const formData = new FormData();
        console.log(fileState);
        formData.append("file", fileState);
    }
    return (
        <div>
            <input color="inherit" type="file" accept='.csv' onChange={onFileChange} />
            <label htmlFor="outlined-button-file">
                <Button variant="outlined" color="inherit" component="span" className={classes.button} onClick={onFileUpload}>
                    Upload
        </Button>


            </label>
            {/* {rows != null && columns != null ? <CourseList columns={columns} data={rows} /> : null} */}
        </div>
    );
}