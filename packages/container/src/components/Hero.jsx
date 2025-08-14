import React from 'react';
import { portfolioData } from '../data';

const Hero = () => {
  return (
    <section id="hero" className="text-center py-20">
      <h1 className="text-5xl font-bold text-white">{portfolioData.name}</h1>
      <h2 className="text-2xl text-blue-400 mt-2">{portfolioData.title}</h2>
      <p className="mt-4 max-w-2xl mx-auto">{portfolioData.bio}</p>
      <a
        href="#projects"
        className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
