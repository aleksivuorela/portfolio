import React from 'react'
import Image from './image';

const Intro = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="intro full-height">
      <Image
        imageInfo={backgroundImage}
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
    </div>
  );
}

export default Intro
