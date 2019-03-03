import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Skills from '../components/skills'

const SkillsContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: {key: {eq: "skills"}}) {
            frontmatter {
              title
              areas {
                title
                techs {
                  title,
                  logo {
                    alt
                    image {
                      publicURL
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
          <Skills
            title={markdownRemark.frontmatter.title}
            areas={markdownRemark.frontmatter.areas}
          />
        );
      }}
    />
  )
}

export default SkillsContainer
