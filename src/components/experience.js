import React from 'react'
import { HTMLContent } from './content'

const Experience = ({ title, content, contentComponent }) => {
  const Content = contentComponent || HTMLContent

  return (
    <section id="experience" className="section scrollspy">
      <h2 className="section-title">{title}</h2>
      <Content className="section-content" content={content} />
    </section>
  );
}

export default Experience
