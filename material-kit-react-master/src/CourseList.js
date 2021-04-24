import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import ReactTable from "react-table";
import Button from '@material-ui/core/Button';
// import {CSVLink, CSVDownload} from 'react-csv';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { XGrid, useGridApiRef } from '@material-ui/x-grid';


import "./table.css";
const useStyles = makeStyles((theme) => ({

    table:{
        backgroundColor:"green"
    },
  }));


export default function Table(props) {
 console.log(props.data, "jkjhdafkjagljkafhglha;luojhgb")
 const classes = useStyles();

function exportTableToExcel(){
    
    var csv ='' ;
    props.columns.forEach(function(row){
        var data = row.Header;
        // console.log(data);
        csv += data +',';
    });
    csv += "\n";
    for(var i = 0 ; i< props.data.length ; i++){
        var x = props.data[i];
        // console.log(x["courseCode"])
        props.columns.forEach(function(row){
            var t =  x[row.accessor.toString()];
            csv += t +',';
            
        });

    csv += '\n';

    }

 
    // console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'data.csv';
    hiddenElement.click();
}

  return (
<div>
<Button onClick = {exportTableToExcel}>Export</Button>

 <XGrid rows={props.data} columns={props.columns} />
</div>
  );
}