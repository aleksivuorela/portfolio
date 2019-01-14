import React from 'react'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WebIcon from '@material-ui/icons/Web';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SchoolIcon from '@material-ui/icons/School';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import { withStyles } from '@material-ui/core/styles';
import constants from '../common/constants'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  logo: {
    padding: '30px'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: constants.drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: constants.drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${constants.drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: constants.drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
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
    const { classes, theme } = this.props;

    const drawer = (
      <>
        <div className={classes.logo}>
          Aleksi Vuorela<br />
          Full Stack Developer
        </div>
        <Divider />
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(Nav);