import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import About from '../components/about'

const AboutContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: {key: {eq: "about"}}) {
            html
            frontmatter {
              title,
              image
            }
          }
        } 
      `}
      render={data => {
        const { markdownRemark } = data;
        return (
          <About
            title={markdownRemark.frontmatter.title}
            image={markdownRemark.frontmatter.image}
            content={markdownRemark.html}
          />
        );
      }}
    />
  )
}

export default AboutContainer
