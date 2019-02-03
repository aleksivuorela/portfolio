import React from 'react'
import { HTMLContent } from './content'
import Image from './image'

const About = ({ title, image, content, contentComponent }) => {
  const Content = contentComponent || HTMLContent

  return (
    <section id="about" className="section scrollspy full-height">
      <h2>{title}</h2>
      <Content className="about-content" content={content} />
      <Image imageInfo={{ image: image, alt: 'test', style: { width: 120, height: 120 } }} />
    </section>
  );
}

export default About
