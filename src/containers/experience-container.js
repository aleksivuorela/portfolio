import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Experience from '../components/Experience'

const ExperienceContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: {key: {eq: "experience"}}) {
            frontmatter {
              title
              jobs {
                employer
                position
                start_date
                end_date
                description
                logo {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        } 
      `}
      render={data => {
        const { markdownRemark } = data;
        return (
          <Experience
            title={markdownRemark.frontmatter.title}
            jobs={markdownRemark.frontmatter.jobs}
          />
        );
      }}
    />
  )
}

export default ExperienceContainer
