import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, Icon, IconButton, Typography } from '@material-ui/core';
import { FuseUtils, FuseAnimate } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from "react-table";
import history from '@history';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import "./table.css";
const useStyles = makeStyles((theme) => ({
    table: {
        backgroundColor: "green"
    },
}));


export default function CourseList(props) {
    console.log(props.data)
    // console.log(props.data[0]['PMT (excl. last marks) out of 45.5']);
    const classes = useStyles();


    function exportTableToExcel() {

        var csv = '';
        props.columns.forEach(function (row) {
            var data = row.Header;
            // console.log(data);
            csv += data + ',';
        });
        csv += "\n";
        for (var i = 0; i < props.data.length; i++) {
            var x = props.data[i];
            // console.log(x["courseCode"])
            props.columns.forEach(function (row) {
                var t = x[row.accessor.toString()];
                csv += t + ',';

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
    const onRowClick = (state, rowInfo, column, instance) => {
        return {
            onClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
            }
        }
    }
    return (
        <div>
            <Button onClick={exportTableToExcel}>Export</Button>
            {/* <Button onClick = {resetTable}>Reset</Button> */}
            <FuseAnimate animation="transition.slideUpIn" delay={300}>

                <ReactTable
                    id="dataTable"
                    className="-striped -highlight h-full sm:rounded-16 overflow-hidden finaltable"
                    // className={classes.table}
                    // getTrProps={onRowClick}
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
                    data={props.data}
                    columns={

                        props.columns
                    }

                   
                    defaultPageSize={5}
                    noDataText="Nothing found"
                />
            </FuseAnimate>
        </div>
    );
}