import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gray-800" ref={ref}>
      <div className={`container mx-auto transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-center">
          I'm a passionate Full Stack Engineer with a knack for creating dynamic and user-friendly web applications. With 9 years in the industry, I have a proven track record of designing, developing, and deploying high-quality software. My expertise spans across the entire web development stack, from crafting beautiful front-end interfaces with React to building robust back-end systems with Node.js and Python. I'm always eager to learn new technologies and take on challenging projects.
        </p>
      </div>
    </section>
  );
};

export default About;
