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
                            <Typography variant="h5">Your Name</Typography>
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

                {/* <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://drive.google.com/thumbnail?id=1CSqe5rPI_BBtw900EVbeSn5PiaE4sNzm" alt="" width="410" height="267" /></p>
                <h1 class="username" style="text-align: center;"><span style="color: #ff00ff;"><strong>&nbsp;{{email}}</strong></span></h1>
                <h1 style="text-align: center;"><span style="color: #ff00ff;"><strong>&nbsp;sent u below message.</strong></span></h1>
                <h3 style="text-align: center;"><span style="color: #000000;">&nbsp;{{text}}</span></h3>

                {props.columns.map((column)=>(
                <h3 style="text-align: center;"><span style="color: #000000;">&nbsp;{{this}}</span></h3>
                ))}

                <p style="text-align: center;"><span style="color: #808080;"><img style="border-radius: 50%;" src="https://drive.google.com/thumbnail?id=1HKVHblzXcLOfNFFPEI1YG1vc3F12chgu" alt="" width="76" height="77" /></span></p>
                <p style="text-align: center;"><span style="color: #808080;"><em>None of the information told is endorsed by our software, We don't have any role in the generation of this information.This is a system generated mail please don't reply to it, reply to the sender instead.</em></span></p>
                <p>&nbsp;</p> */}

            </FuseAnimate>
        </div>
        </Container>
    );
}

