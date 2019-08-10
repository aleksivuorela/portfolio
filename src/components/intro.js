import React from 'react'
import Image from './image';

const Intro = ({ title, subtitle, backgroundImage }) => {
  return (
    <section id="intro" className="section full-height">
      <Image
        imageInfo={{alt: 'background', ...backgroundImage}}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }}
      />
      <div className="overlay" />
      <div className="intro-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default Intro
