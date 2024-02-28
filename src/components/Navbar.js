import React from 'react';
import Logo from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="flex space-x-4 justify-between items-center">
        <img src={Logo} alt="logo" className="w-40 h-auto" />
        <div className="text-white font-bold text-xl">Uzima Fitness</div>
      </div>
      <div className="flex items-center font-bold text-xl">
        <Link to="/" className="text-white mr-4 hover:text-gray-300">Home</Link>
        <Link to="/blog" className="text-white hover:text-gray-300">Blog</Link>
    </div>
    </nav>
  );
};

export default Navigation;
