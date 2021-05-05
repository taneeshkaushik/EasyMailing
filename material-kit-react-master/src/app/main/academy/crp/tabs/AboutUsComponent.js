import React from 'react';
import {Button, Card, CardContent, Divider, Typography, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';
import clsx from 'clsx';
 
const useStyles = makeStyles(theme => ({
    header    : {
        height    : 600,
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color     : theme.palette.primary.contrastText
    },
    cardHeader: {
        backgroundColor: theme.palette.primary[800],
        color          : 'white'
    }
}));

export default function AboutUsPage()
{
    const classes = useStyles();

    return (
        <div>

            <div className={clsx(classes.header, "flex")}>

                <div className="p-24 w-full max-w-2xl mx-auto">
                    <div className="text-center my-900 mx-24">

                        <FuseAnimate animation="transition.slideUpIn" duration={400} delay={200}>
                            <Typography variant="h3" style={{color:'orange'}}>
                               About Us
                            </Typography>
                        </FuseAnimate>

                        <FuseAnimate duration={400} delay={600}>
                            <Typography variant="h6" color="inherit" className="opacity-75 mt-16 mx-auto max-w-1000">
                               This simple and sleek tool has been developed at IIT Ropar as one of the deliverables in the course of  Development Engineering, under our 
                               very inspiring faculty <b>Dr. Puneet Goyal, Assistant Prof,CSE IIT Ropar</b>.
                               <br></br>
                               <br></br>
                               The tool is just an attempt to make the life of academic community easy, a lot of things are done by academic community in excel sheets, 
                               like putting the remarks of an assignment, sending the marks to students and what not, 
                               as this data is different for each recipient, it takes a lot of work, to send these data to specific recipients,
                               This is where we can use this simple application. 
                            </Typography>
                        </FuseAnimate>
                    </div>
                </div>
            </div>

            <div className="-mt-192">

                <div className="w-full max-w-2xl mx-auto">

                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                        className="flex items-center justify-center flex-wrap"
                    >
                        <div className="w-full max-w-320 sm:w-1/3 p-12">

                            <Card raised square>
                                <CardContent className="p-32">
                                    <div className="flex justify-center">
                                        <div className="flex items-end">
                                            <Avatar src="/static/images/python.jpeg" style={{width:100, height:100}} />
                                        </div>
                                    </div>
                                    <Divider className="my-32"/>
                                    <div className="flex flex-col text-center ">
                                        <Typography variant="subtitle1" className="">
                                            <span className="font-bold mr-10">Abhishek Kumar Gupta</span>  
                                        </Typography>
                                        <br></br>
                                        <Typography variant="subtitle1" className="">
                                            Pre Final Year
                                        </Typography>
                                        <Typography variant="subtitle1" className="">
                                            CSE, IIT Ropar
                                        </Typography>
                                        <br></br>
                                        <br></br>
                                        <div className="flex justify-center pb-32">
                                            <Button href="https://www.linkedin.com/in/abhishek-kumar-gupta-9b7381176/" variant="contained" color="secondary" className="w-128">LinkedIn</Button>
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>

                        <div className="w-full max-w-320 sm:w-1/3 p-12">

                            <Card raised square>
                                <CardContent className="p-32">
                                    <div className="flex justify-center">
                                        <div className="flex items-end">
                                        <Avatar src="/static/images/divyanshu.jpeg" style={{width:100, height:100}} />
                                        </div>
                                    </div>
                                    <Divider className="my-32"/>
                                    <div className="flex flex-col text-center ">
                                        <Typography variant="subtitle1" className="">
                                            <span className="font-bold mr-10">Divyanshu Mathpal</span>  
                                        </Typography>
                                        <br></br>
                                        <Typography variant="subtitle1" className="">
                                            Pre Final Year
                                        </Typography>
                                        <Typography variant="subtitle1" className="">
                                            CSE, IIT Ropar
                                        </Typography>
                                        <br></br>
                                        <br></br>
                                        <div className="flex justify-center pb-32">
                                            <Button href="https://www.linkedin.com/in/divyanshu-mathpal-5a029b17b/" variant="contained" color="secondary" className="w-128">LinkedIn</Button>
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>

                        <div className="w-full max-w-320 sm:w-1/3 p-12">

                            <Card raised square>
                                <CardContent className="p-32">
                                    <div className="flex justify-center">
                                        <div className="flex items-end">
                                            <Avatar src="/static/images/taneesh.jpeg" style={{width:100, height:100}} />
                                        </div>
                                    </div>

                                    <Divider className="my-32"/>

                                    <div className="flex flex-col text-center ">
                                        <Typography variant="subtitle1" className="">
                                            <span className="font-bold mr-10">Taneesh Kaushik</span>  
                                        </Typography>
                                        <br></br>
                                        <Typography variant="subtitle1" className="">
                                            Pre Final Year
                                        </Typography>
                                        <Typography variant="subtitle1" className="">
                                            CSE, IIT Ropar
                                        </Typography>
                                        <br></br>
                                        <br></br>
                                        <div className="flex justify-center pb-32">
                                            <Button href="https://www.linkedin.com/in/taneesh-kaushik-345766144/" variant="contained" color="secondary" className="w-128">LinkedIn</Button>
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>
                    </FuseAnimateGroup>

                    <div className="flex flex-col items-center py-96 text-center sm:text-left max-w-xl mx-auto">

                        <Typography variant="h4" className="pb-40 font-light">Worried About Your Privacy? No worries,  It's all end to end.</Typography>

                        <div className="flex flex-wrap w-full">
                                <Typography className="text-20 text-center mb-8">None of your activities or your data is known by us.</Typography>
                                <Typography className="text-16" color="textSecondary">
                                    This application is end to end service, there is no role of any database or backend which is storing 
                                    your activities, neither any of your data is stored or kept anywhere, it all works in your browser, nothing is sent out of it. 
                                    Google services are used to authenticate you, and then gmail is handling your data once this application makes request to it. 
                                    So feel free to use our application, there is nothing to worry at all, it's all end to end between google and you. 
                                </Typography>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}