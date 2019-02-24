import React from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown'

const converter = new showdown.Converter()

export const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const MarkdownContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes
MarkdownContent.propTypes = Content.propTypes
