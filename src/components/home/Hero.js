import React from 'react';
import Heading from './Heading.js'
import Social from './Social.js'

export default function Hero() {
  return (
    <div className="hero">
      <Heading heading="Brandon Murdoch"/>
      <Social name="github" url="https://github.com/MurdochB/" icon="github-icon"/>
      <Social name="linkedIn" url="https://uk.linkedin.com/in/brandon-a-murdoch" icon="linkedin-icon"/>
      <Social name="cv" url="/cv.txt" icon="pdf-icon"/>
    </div>
  );
}