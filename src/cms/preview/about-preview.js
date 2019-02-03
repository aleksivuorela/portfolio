import React from 'react'
import PropTypes from 'prop-types'
import About from '../../components/about'
import Content from '../../components/content'

const AboutPreview = ({ entry, widgetFor }) => (
  <About
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
    contentComponent={Content}
  />
)

AboutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPreview