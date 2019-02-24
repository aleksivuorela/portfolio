import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Experience from '../components/Experience'

const ExperienceContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: {key: {eq: "experience"}}) {
            html
            frontmatter {
              title
            }
          }
        } 
      `}
      render={data => {
        const { markdownRemark } = data;
        return (
          <Experience
            title={markdownRemark.frontmatter.title}
            content={markdownRemark.html}
          />
        );
      }}
    />
  )
}

export default ExperienceContainer
