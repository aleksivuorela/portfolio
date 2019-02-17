import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

/* Preview compatible image */
const Image = ({ imageInfo, style }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} style={style} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} style={style} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} style={style} />

  return null
}

Image.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
  style: PropTypes.object,
}

export default Image