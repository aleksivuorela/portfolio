import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroContainer from '../containers/intro-container'
import AboutContainer from '../containers/about-container'
import ExperienceContainer from '../containers/experience-container'

const IndexPage = () => (
  <Layout>
    <SEO />
    <IntroContainer />
    <AboutContainer />
    <ExperienceContainer />
  </Layout>
)

export default IndexPage
