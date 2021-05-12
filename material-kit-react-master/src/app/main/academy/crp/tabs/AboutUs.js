import React from 'react';
import { makeStyles  } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import {Toolbar , Dialog} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MailPreview from './MailPreview'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import AboutUsComponent from './AboutUsComponent';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    props.setOpenAbout(false);
  };

  return (
    <div>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <ArrowBackIcon/> 
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Put your code here */}
        <AboutUsComponent />


      </Dialog>
    </div>
  );
}
