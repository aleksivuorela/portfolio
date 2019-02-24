import React from 'react'
import { HTMLContent } from './content'

const About = ({ title, content, contentComponent }) => {
  const Content = contentComponent || HTMLContent

  return (
    <section id="about" className="section scrollspy">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        <Content content={content} />
      </div>
    </section>
  );
}

export default About
