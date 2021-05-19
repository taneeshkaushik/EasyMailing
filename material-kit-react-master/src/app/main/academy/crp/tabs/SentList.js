import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MailPreview from './MailPreview'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container } from '@material-ui/core';
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
    props.setEmailListOpen(false);
  };

  console.log(props.sentList);
  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <ArrowBackIcon />  List of Sent Emails
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
            <List>
                {
                    props.rows.map((value, index) => {
                        
                        if( props.sentList.includes(value.email)){
                        return(
                            <ListItem>
                             <ListItemText primary={index}/>

                             <ListItemText
                                    primary={value.email}

                                />
                            <ListItemText primary="Sent"/>

                            </ListItem>
                         );
                        }
                        else{
                            return(

                                <ListItem>
                                <ListItemText primary={index}/>

                                <ListItemText
                                        primary={value.email}

                                    />
                                <ListItemText primary="UnSent"/>

                                </ListItem>
                            );
                        }
                    
                    })


                    // props.sentList.map((value, index) => {
                    //     return(
                    //         <ListItem>
                    //           {index} - {value}
                    //         </ListItem>
                    //     )
                    // })

                }

            </List>
        </Container>

        
      </Dialog>
    </div>
  );
}
