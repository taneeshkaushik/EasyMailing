import React from 'react';
import {AppBar, Toolbar,Typography} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';

function FooterLayout1(props)
{
    const footerTheme = useSelector(({fuse}) => fuse.settings.footerTheme);

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" style={{color:"#0e1e25"}}>
                <Toolbar className="px-16 py-0 flex items-center">
                    <Typography style={{color:"white"}}>
                        IIT ROPAR
                        <br></br>
                        Created By: 
                        Abhishek Kumar Gupta, Divyanshu Mathpal, Taneesh Kaushik in DEP Under Dr. Puneet Goyal
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default FooterLayout1;
