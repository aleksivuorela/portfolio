import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroContainer from '../containers/intro-container'
import AboutContainer from '../containers/about-container'

const IndexPage = () => (
  <Layout>
    <SEO />
    <IntroContainer />
    <AboutContainer />
  </Layout>
)

export default IndexPage
