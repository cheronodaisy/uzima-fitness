import React from 'react';
import Logo from '../assets/images/logo.jpeg';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="flex space-x-4 justify-between items-center">
        <img src={Logo} alt="logo" className="w-40 h-auto" />
        <div className="text-white font-bold text-xl">Uzima Fitness</div>
      </div>
      <div>
        <ul className="flex space-x-4 text-white font-bold text-xl">
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
