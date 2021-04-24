import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import history from '@history';
import Button from '@material-ui/core/Button';
// import {CSVLink, CSVDownload} from 'react-csv';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import "./table.css";
const useStyles = makeStyles((theme) => ({

    table:{
        backgroundColor:"green"
    },
  }));


export default function CourseList(props) {
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
<FuseAnimate animation="transition.slideUpIn" delay={300}>

<ReactTable
    id  = "dataTable"
    className="-striped -highlight h-full sm:rounded-16 overflow-hidden "
    // className={classes.table}
    getTrProps={(state, rowInfo, column) => {
        return { 
            // style: { 
            //       backgroundColor: 'green', 
            // }, 
     } 
        // return {
        //     className: "cursor-pointer",
        //     onClick  : (e, handleOriginal) => {
        //         if ( rowInfo )
        //         {
        //             // history.push('crp/coursedetails/1/');;

        //             // dispatch(Actions.openEditContactDialog(rowInfo.original));
        //         }
        //     }
        // }
    }}
    data={props.data}
    columns={
        
        props.columns
    }

    // columns={[
    //     {
    //         Header   : () => (
    //             <Checkbox
    //                 onClick={(event) => {
    //                     event.stopPropagation();
    //                 }}
    //                 onChange={(event) => {
    //                     // event.target.checked ? dispatch(Actions.selectAllContacts()) : dispatch(Actions.deSelectAllContacts());
    //                 }}
    //                 // checked={selectedContactIds.length === Object.keys(contacts).length && selectedContactIds.length > 0}
    //                 // indeterminate={selectedContactIds.length !== Object.keys(contacts).length && selectedContactIds.length > 0}
    //             />
    //         ),
    //         accessor : "",
    //         Cell     : row => {
    //             return (<Checkbox
    //                     onClick={(event) => {
    //                         event.stopPropagation();
    //                     }}
    //                     // checked={selectedContactIds.includes(row.value.id)}
    //                     // onChange={() => dispatch(Actions.toggleInSelectedContacts(row.value.id))}
    //                 />
    //             )
    //         },
    //         className: "justify-center",
    //         sortable : false,
    //         width    : 64
    //     },
    //     // {
    //     //     // Header   : () => (
    //     //         // selectedContactIds.length > 0 && (
    //     //             // <ContactsMultiSelectMenu/>
    //     //         // )
    //     //     // ),
    //     //     accessor : "avatar",
    //     //     Cell     : row => (
    //     //         <Avatar className="mr-8" alt={row.original.name} src={row.value}/>
    //     //     ),
    //     //     className: "justify-center",
    //     //     width    : 64,
    //     //     sortable : false
    //     // },
    //    
    // ]}
    defaultPageSize={5}
    noDataText="Nothing found"
/>
</FuseAnimate>
</div>
  );
}
