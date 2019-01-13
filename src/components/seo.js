import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ keywords }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        return (
          <Helmet
            htmlAttributes={{
              lang: `en`
            }}
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: `description`,
                content: data.site.siteMetadata.description,
              },
              {
                property: `og:title`,
                content: data.site.siteMetadata.title,
              },
              {
                property: `og:description`,
                content: data.site.siteMetadata.description,
              },
              {
                property: `og:type`,
                content: `website`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                  : []
              )}
          >
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  keywords: [
    `portfolio`,
    `full stack developer`,
    `software developer`,
    `front-end developer`
  ],
}

SEO.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
