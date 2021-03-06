import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Education from '../components/education'

const EducationContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: {key: {eq: "education"}}) {
            frontmatter {
              title
              schools {
                name
                degree
                startdate
                enddate
                logo {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 60) {
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
          <Education
            title={markdownRemark.frontmatter.title}
            schools={markdownRemark.frontmatter.schools}
          />
        );
      }}
    />
  )
}

export default EducationContainer
