import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Intro from '../components/intro'

const IntroContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bgImage: file(relativePath: { eq: "bgimage.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          markdownRemark(frontmatter: {key: {eq: "intro"}}) {
            frontmatter {
              title,
              subtitle
            }
          }
        }
      `}
      render={data => {
        const { title, subtitle } = data.markdownRemark.frontmatter;
        const { bgImage } = data;
        return (
          <Intro
            title={title}
            subtitle={subtitle}
            backgroundImage={bgImage}
          />
        );
      }}
    />
  )
}

export default IntroContainer
