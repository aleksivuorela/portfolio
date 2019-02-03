import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import WebIcon from '@material-ui/icons/Web'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import SchoolIcon from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail'
import DescriptionIcon from '@material-ui/icons/Description'
import { withStyles } from '@material-ui/core/styles'
import constants from '../common/constants'

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: constants.drawerWidth,
      flexShrink: 0
    },
  },
  drawerPaper: {
    width: constants.drawerWidth
  },
  toolbar: {
    justifyContent: 'center'
  },
  menuButton: {
    position: 'absolute',
    left: '16px'
  },
  nameContainer: {
    display: 'block',
    padding: '30px',
    backgroundColor: '#fafafa',
    userSelect: 'none',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: '10px 0 5px 0',
      backgroundColor: '#fff'
    }
  },
  name: {
    display: 'block',
    color: theme.palette.primary.main,
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '18px',
      fontWeight: 400
    }
  },
  title: {
    display: 'block',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      fontSize: '11px',
      lineHeight: '18px'
    }
  }
});

const menuItems = [
  { title: 'About', icon: <PersonIcon /> },
  { title: 'Experience', icon: <TrendingUpIcon /> },
  { title: 'Projects', icon: <WebIcon /> },
  { title: 'Skills', icon: <EqualizerIcon /> },
  { title: 'Education', icon: <SchoolIcon /> },
  { title: 'Contact', icon: <MailIcon /> },
  { title: 'Resume', icon: <DescriptionIcon /> }
];

class Nav extends React.Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;

    const drawer = (
      <>
        <Hidden xsDown implementation="css">
          <div className={classes.nameContainer}>
            <span className={classes.name}>Aleksi Vuorela</span>
            <span className={classes.title}>Full Stack Developer</span>
          </div>
          <Divider />
        </Hidden>
        <List>
          {menuItems.map(item => (
            <ListItem button key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </>
    );

    return (
      <>
        <Hidden smUp implementation="css">
          <AppBar position="fixed" color="inherit">
            <Toolbar className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon color="primary" />
              </IconButton>
              <div className={classes.nameContainer}>
                <span className={classes.name} href="#">Aleksi Vuorela</span>
                <span className={classes.title}>Full Stack Developer</span>
              </div>
            </Toolbar>
          </AppBar>
        </Hidden>
        <nav>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Nav);