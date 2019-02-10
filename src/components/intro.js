import React from 'react'
import { Parallax } from 'react-parallax';

const Intro = ({ title, subtitle, image }) => {
  return (
    <Parallax
      bgImage={image}
      bgImageAlt="background"
      strength={500}
    >
      <div className="intro full-height">
        <div className="overlay" />
        <div className="intro-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </Parallax>
  );
}

export default Intro
