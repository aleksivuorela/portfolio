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
              image
            }
          }
        } 
      `}
      render={data => {
        const { title, subtitle, image } = data.markdownRemark.frontmatter;
        return (
          <Intro
            title={title}
            subtitle={subtitle}
            image={image}
          />
        );
      }}
    />
  )
}

export default IntroContainer
