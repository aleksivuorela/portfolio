import React from 'react'
import { HTMLContent } from './content'

const About = ({ title, content, contentComponent }) => {
  const Content = contentComponent || HTMLContent

  return (
    <section id="about" className="section scrollspy">
      <h2>{title}</h2>
      <Content className="about-content" content={content} />
    </section>
  );
}

export default About
