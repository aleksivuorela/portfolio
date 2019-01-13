import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from './nav'
import constants from '../common/constants'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <Nav />
    <main style={{ paddingLeft: constants.drawerWidth }}>
      {children}
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout