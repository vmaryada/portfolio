import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import logo from '../logo.png';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GitHubIcon from '@material-ui/icons/GitHub';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 5,
  },
  title: {
    flexGrow: 1
  },
  textNav: {
marginRight:25
  },
  logo: {marginRight:20 }
});


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerOpen(!drawerOpen);
  };

  return (

    <React.Fragment>
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer()} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            &nbsp;
          </Typography>
          <Hidden only='xs'>
          <Typography variant="h6" className={classes.title}>
            &nbsp;
          </Typography>
          <Typography variant="h6" className={classes.textNav}>
          Vineeth Reddy Maryada
          </Typography>
          </Hidden>
          <img  src={logo} alt="Logo" width={80} className={classes.logo}/> 
      </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={drawerOpen} onClose={toggleDrawer()}>
        <div role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()} >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon> <HomeIcon /></ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            {/*<ListItem button component={Link} to="/#aboutme">
              <ListItemIcon> <FaceIcon /></ListItemIcon>
              <ListItemText primary={'About Me'} />
  </ListItem>*/}
            <ListItem button component={Link} to="/contact" >
              <ListItemIcon> <MailIcon /></ListItemIcon>
              <ListItemText primary={'Contact Me'} />
            </ListItem>
            <ListItem button component={Link} to="/resume">
              <ListItemIcon> <MenuBookIcon /></ListItemIcon>
              <ListItemText primary={'Resume'} />
            </ListItem>
            <ListItem button component={Link} to="/projects">
              <ListItemIcon> <GitHubIcon /></ListItemIcon>
              <ListItemText primary={'Projects'} />
            </ListItem> 
          </List>
        </div>
      </Drawer>
    </React.Fragment>

  );
}