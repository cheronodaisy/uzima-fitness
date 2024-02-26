import React from 'react';
import Logo from '../assets/images/logo.jpeg';

const Footer = () => (
  <div className="mt-20 bg-pink-100">
    <div className="flex justify-center items-center px-4 pt-6">
      <img src={Logo} alt="logo" className="w-40 h-auto" />
    </div>
    <p className="text-center text-lg lg:text-xl mt-8 pb-10">Uzima Fitness by DC</p>
  </div>
);

export default Footer;
