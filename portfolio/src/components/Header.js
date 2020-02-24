import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Linkedin from './icons/Linkedin';
import Twitter from './icons/Twitter';
import './Header.css';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  typography:{
    flexGrow:1,
    align:"center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className="navbar">
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>  
                  
            <Typography className={classes.title} color="transparent" variant="h6" noWrap>
              AkshayKumar
            </Typography>
            
            <Typography className={classes.typography}>
              <pre>  About       Featured      Portfolio      Blog       Contact</pre>
                
            </Typography>

            <pre><a href="https://www.facebook.com/profile.php?id=100005452266714"><Facebook /></a>   <a href="https://www.linkedin.com/in/akshay-kumar-9b8a46187/"><Linkedin /></a>   <a href="https://www.instagram.com/imposing_akshu/"><Instagram /></a>   <a href="https://twitter.com/AkshayKumar"><Twitter /></a>
            </pre>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
