import React from 'react';
import { portfolioData } from '../data';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Skills = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className={`container mx-auto transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: isIntersecting ? `${skill.level}%` : '0%', transition: `width 1s ease-in-out ${index * 0.1}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
