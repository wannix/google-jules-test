import React from 'react';
import { portfolioData } from '../data';

const Header = () => (
  <header className="bg-gray-800 p-4 fixed w-full top-0 z-10">
    <nav className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-white">{portfolioData.name}</a>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
