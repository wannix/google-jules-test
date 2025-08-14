import React from 'react';
import { portfolioData } from '../data';

const Footer = () => (
  <footer className="bg-gray-800 p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 {portfolioData.name}. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
        <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
        <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;
