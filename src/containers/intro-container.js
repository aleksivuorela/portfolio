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
              bgimage {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
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
