import React from 'react';
import {AppBar, Toolbar,Typography , Button} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';

function FooterLayout1(props)
{
    const footerTheme = useSelector(({fuse}) => fuse.settings.footerTheme);

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" style={{color:"#0e1e25"}}>
                <Toolbar className="px-16 py-0 flex items-right " style={{ float: "right"}}>
                    
                    <Typography style={{color:"white" }} >
                        <strong style={{color:"red"}}>Disclaimer</strong>
                        <br></br>
                        We do not store any kind of data. We understand your privacy.
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default FooterLayout1;
