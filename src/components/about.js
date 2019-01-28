import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { HTMLContent } from './content'
import Image from './image'

const About = () => {
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
          <div className="about">
            <h1>{markdownRemark.frontmatter.title}</h1>
            <HTMLContent className="about-content" content={markdownRemark.html} />
            <Image imageInfo={{ image: markdownRemark.frontmatter.image, alt: 'test', style: { width: 120, height: 120 } }} />
          </div>
        );
      }}
    />
  )
}

export default About
