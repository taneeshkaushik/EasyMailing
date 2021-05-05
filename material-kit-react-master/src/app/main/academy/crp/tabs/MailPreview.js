import React, {useEffect, useState} from 'react';
import {Avatar, Container, Divider, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';



export default function MailPreview(props)
{   
    return (
        <Container>
        <div className="p-16 sm:p-24">
            <div className="flex items-center justify-between overflow-hidden">

                <div className="flex flex-col">
                    <FuseAnimate delay={100}>
                        <Typography variant="h3" className="flex">Subject: {props.subject}</Typography>
                    </FuseAnimate>
                </div>
            </div>

            <Divider className="my-16"/>

            <FuseAnimate animation="transition.slideUpIn" delay={200}>
                <div>

                    <div className="flex items-start justify-between">

                        <div className="flex items-center justify-start">
                        <Avatar style={{color:'purple'}}>N</Avatar>
                            <Typography variant="h5">  Your Name</Typography>
                        </div>
                    </div>
                    <Divider className="my-16"/>
                    <div class="content-center">
                        <Typography variant="h5">{props.body}</Typography>
                        {props.columns.map((column)=>(
                            <Typography variant="h5">{column}:  value in sheet</Typography>
                        ))}
                    </div>
                </div>
            </FuseAnimate>
        </div>
        </Container>
    );
}

