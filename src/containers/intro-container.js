import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Intro from '../components/intro'

const IntroContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: {key: {eq: "intro"}}) {
            frontmatter {
              title,
              subtitle,
              bgimage {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { title, subtitle, bgimage } = data.markdownRemark.frontmatter;
        return (
          <Intro
            title={title}
            subtitle={subtitle}
            backgroundImage={bgimage}
          />
        );
      }}
    />
  )
}

export default IntroContainer
