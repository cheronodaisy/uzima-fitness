import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="text-white font-bold text-xl">Uzima Fitness</div>
      <div>
        <ul className="flex space-x-4 text-white">
          <li><a href="/">Home</a></li>
          <li><a href="/components/Exercises">Exercises</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
