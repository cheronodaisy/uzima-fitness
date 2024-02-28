import React from 'react';
import Logo from '../assets/images/logo.jpeg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => (
  <div className="mt-20 bg-pink-100">
    <div className="flex justify-center items-center px-4 pt-6">
      <img src={Logo} alt="logo" className="w-40 h-auto" />
    </div>
    <p className="text-center text-lg lg:text-xl mt-8 pb-10">Uzima Fitness by DC</p>
    <div className="flex items-center px-8 mb-8">
          <a href="https://github.com/cheronodaisy" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub className="text-yellow text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/daisy-cherono-4a059522b/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin className="text-yellow text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://twitter.com/jepchumba_daisy" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-yellow text-2xl hover:text-gray-400 transition duration-300" />
          </a>
    </div>
  </div>
);

export default Footer;
