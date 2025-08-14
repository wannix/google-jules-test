import React from 'react';
import { portfolioData } from '../data';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-gray-800" ref={ref}>
      <div className={`container mx-auto transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="relative">
          <div className="border-r-2 border-blue-500 absolute h-full top-0" style={{ left: '1.5rem' }}></div>
          {portfolioData.experience.map((job, index) => (
            <div key={index} className="mb-8 flex items-center w-full">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                {portfolioData.experience.length - index}
              </div>
              <div className="ml-8 bg-gray-900 p-6 rounded-lg w-full">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-blue-400">{job.company} | {job.period}</p>
                <p className="mt-2">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
