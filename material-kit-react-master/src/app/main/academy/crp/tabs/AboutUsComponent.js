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
                            Post assessment, sending individually the marks/feedback/remarks/info to students in a time efficient manner is always a concern for the faculty members. Currently, there are not many easy-to-use supportive tools for this purpose and one has to spend quite a significant time to send marks, feedback or other info individually. Or one has to compromise privacy and share marks/feedback of all with all.
                            <br></br>    <br></br>In order to serve and assist the academic community, here we provide a simple and sleek tool "ESMP" to quickly send individual emails with recipient-specific info/marks/feedback.  ESMP - Easy and Secure Mailing Portal not only empowers you to easily send individual emails but also  <strong>is very secure and respects your privacy.</strong>
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
                                            Batch of 2022
                                        </Typography>
                                        <Typography variant="subtitle1" className="">
                                            CSE, IIT Ropar
                                        </Typography>
                                        <br></br>
                                        <br></br>
                                        <div className="flex justify-center pb-32">
                                            <Button target="_blank" href="https://www.linkedin.com/in/abhishek-kumar-gupta-9b7381176/" variant="contained" color="secondary" className="w-128">LinkedIn</Button>
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
                                            Batch of 2022
                                        </Typography>
                                        <Typography variant="subtitle1" className="">
                                            CSE, IIT Ropar
                                        </Typography>
                                        <br></br>
                                        <br></br>
                                        <div className="flex justify-center pb-32">
                                            <Button target="_blank" href="https://www.linkedin.com/in/divyanshu-mathpal-5a029b17b/" variant="contained" color="secondary" className="w-128">LinkedIn</Button>
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
                                            Batch of 2022
                                        </Typography>
                                        <Typography variant="subtitle1" className="">
                                            CSE, IIT Ropar
                                        </Typography>
                                        <br></br>
                                        <br></br>
                                        <div className="flex justify-center pb-32">
                                            <Button target="_blank" href="https://www.linkedin.com/in/taneesh-kaushik-345766144/" variant="contained" color="secondary" className="w-128">LinkedIn</Button>
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>
                    </FuseAnimateGroup>

                    <div className="flex flex-col items-center py-96 text-center sm:text-left max-w-xl mx-auto">

                        <Typography variant="h4" className="pb-40 font-light">Some Other Applications</Typography>

                            <div className="flex flex-wrap w-full">
                                    <Typography className="text-20 text-center mb-8"> This tool can be used by an office staff to inform faculty members individually how many leaves or how much funds are pending. 
                                    This tool can be used by a faculty or a program coordinator to inform the applicants individually about interview time and/or whether one is selected/rejected.</Typography>
                                    {/* <Typography className="text-16" color="textSecondary">
                                
                                    </Typography> */}
                            </div>
                            <br></br>
                            <br></br>
                        <Typography style={{paddingTop:'200'}} variant="h4" className="pb-40 font-light">Privacy and Security</Typography>

                            <div className="flex flex-wrap w-full">
                                    <Typography className="text-20 text-center mb-8"> 
                                        This application is fully secure service, there is no use of any database which is storing your activities, neither any of your data is stored or kept anywhere, we send you an OTP with our mail, and also send the information that you want to share with our email,
                                        there is also authentication done with OTP, which is secured with a secret key. 
                                        Feel free to use it, it's safe. 
                                    </Typography>
                                    {/* <Typography className="text-16" color="textSecondary">
                                
                                    </Typography> */}
                            </div>
                            <br></br>
                            <br></br>
                        <Typography style={{paddingTop:'100'}} variant="h4" className="pb-40 font-light">Credits</Typography>

                            <div className="flex flex-wrap w-full">
                                    <Typography className="text-20 text-center mb-8"> This tool is developed as part of the Development Engineering Project course (CP301) in the Department of Computer Science and Engineering at IIT Ropar.</Typography>
                                    {/* <Typography className="text-16" color="textSecondary">
                                
                                    </Typography> */}
                            </div>
                        
                            <div className="flex flex-wrap w-full">
                                    <Typography className="text-20 text-center mb-8">Developers: Abhishek Kumar Gupta, Divyanshu Mathpal, Taneesh Kaushik , B.Tech CSE 2018-2022, IIT Ropar.</Typography>
                                    <Typography style={{paddingLeft:180}} className="text-20 text-center mb-8" variant="h6"><strong>Project Coordinator and Mentor: Dr. Puneet Goyal, IIT Ropar</strong></Typography>
                            </div>
            
                            <br></br>
                            
                            <div className="flex flex-wrap w-full text-center">
                                    <br></br>

                                    <Typography className="text-20 text-center mb-8">For any feedback and comments, kindly contact: puneet@iitrpr.ac.in </Typography>
                                    <Typography className="text-20 text-center mb-8">Disclaimer:We take no responsibility for the content sent by the user to the email recipients. </Typography>
                            </div>
                            
                            
                    </div>
                </div>
            </div>
        </div>
    );
}