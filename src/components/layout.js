import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'

import Nav from './nav'
import constants from '../common/constants'
import '../styles/layout.scss'

const styles = theme => ({
  '@global': {
    h1: { ...theme.typography.h1 },
    h2: { ...theme.typography.h2 },
    h3: { ...theme.typography.h3 },
    h4: { ...theme.typography.h4 },
    h5: { ...theme.typography.h5 },
    h6: { ...theme.typography.h6 },
    p: { ...theme.typography.body1 },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: constants.drawerWidth
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: constants.appBarHeight
    }
  },
});

const Layout = ({ children, classes }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <Nav />
    <main className={classes.main}>
      {children}
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default withStyles(styles, { withTheme: true })(Layout);