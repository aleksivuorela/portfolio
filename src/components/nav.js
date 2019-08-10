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
import SchoolIcon from '@material-ui/icons/School'
import MailIcon from '@material-ui/icons/Mail'
import DescriptionIcon from '@material-ui/icons/Description'
import { withStyles } from '@material-ui/core/styles'
import constants from '../common/constants'
import Scrollspy from 'react-scrollspy'

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: constants.drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: constants.drawerWidth,
  },
  toolbar: {
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    left: '16px',
  },
  nameContainer: {
    display: 'block',
    padding: '30px',
    backgroundColor: '#fafafa',
    userSelect: 'none',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: '10px 0 5px 0',
      backgroundColor: '#fff',
    },
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
      fontWeight: 400,
    },
  },
  title: {
    display: 'block',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      fontSize: '11px',
      lineHeight: '18px',
    },
  },
  teal: {
    color: '#008073',
  },
  turqoise: {
    color: '#00bcd4',
  },
  blue: {
    color: '#3f51b5',
  },
  purple: {
    color: '#9c27b0',
  },
  orange: {
    color: '#ff9800',
  },
  brown: {
    color: '#795548',
  },
  black: {
    color: '#424242',
  }
})

const menuItems = [
  { title: 'About', href: '#about', icon: <PersonIcon />, color: 'teal' },
  { title: 'Experience', href: '#experience', icon: <TrendingUpIcon />, color: 'turqoise' },
  { title: 'Projects', href: '#projects', icon: <WebIcon />, color: 'blue' },
  { title: 'Skills', href: '#skills', icon: <EqualizerIcon />, color: 'purple' },
  { title: 'Education', href: '#education', icon: <SchoolIcon />, color: 'orange' },
  { title: 'Contact', href: '#contact', icon: <MailIcon />, color: 'brown' },
  { title: 'Resume', href: '#', icon: <DescriptionIcon />, color: 'black' },
]

class Nav extends React.Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  renderDrawer = (isMobile) => (
    <>
      <Hidden xsDown implementation="css">
        <div className={this.props.classes.nameContainer}>
          <span className={this.props.classes.name}>Aleksi Vuorela</span>
          <span className={this.props.classes.title}>Full Stack Developer</span>
        </div>
        <Divider />
      </Hidden>
      <Scrollspy
        componentTag={List}
        items={ ['about', 'experience', 'projects', 'skills', 'education', 'contact'] }
        currentClassName="is-current"
        offset={-30}
      >
        {menuItems.map((item, index) => (
          <a
            href={item.href}
            onClick={isMobile ? this.handleDrawerToggle : null}
            key={index}
          >
            <ListItem
              button
              key={item.title}
              className={this.props.classes[item.color]}
            >
              <ListItemIcon className={this.props.classes[item.color]}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </a>
        ))}
        </Scrollspy>
    </>
  )

  render() {
    const { classes } = this.props

    return (
      <>
        {/* Mobile AppBar */}
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
                <span className={classes.name} href="#">
                  Aleksi Vuorela
                </span>
                <span className={classes.title}>Full Stack Developer</span>
              </div>
            </Toolbar>
          </AppBar>
        </Hidden>
        <nav>
          {/* Mobile Drawer */}
          <Hidden smUp implementation="css">
            <Drawer
              className="nav"
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {this.renderDrawer(true)}
            </Drawer>
          </Hidden>
          {/* Desktop Drawer */}
          <Hidden xsDown implementation="css">
            <Drawer
              className="nav"
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {this.renderDrawer(false)}
            </Drawer>
          </Hidden>
        </nav>
      </>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Nav)
