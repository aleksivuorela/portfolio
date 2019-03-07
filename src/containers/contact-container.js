import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Contact from '../components/contact'

const ContactContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: {key: {eq: "contact"}}) {
            frontmatter {
              title
            }
          }
        } 
      `}
      render={data => {
        const { markdownRemark } = data;
        return (
          <Contact
            title={markdownRemark.frontmatter.title}
          />
        );
      }}
    />
  )
}

export default ContactContainer
