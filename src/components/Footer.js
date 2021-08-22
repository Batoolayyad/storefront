import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PinDropIcon from '@material-ui/icons/PinDrop';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{position:'absolute', bottom:'0',width:"100%", paddingLeft:'20px'}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
           &copy;Batool 2021
          </Typography>
          <div style={{margin:'auto'}}>
            <PinDropIcon style={{padding:'10px'}} />
            <ContactMailIcon style={{padding:'10px'}}/>
            <PhoneIcon style={{padding:'10px'}}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}