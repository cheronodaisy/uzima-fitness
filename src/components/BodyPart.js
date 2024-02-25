import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <button
    type="button"
    className={`flex flex-col items-center justify-center ${
      bodyPart === item ? 'border-t-4 border-red-600' : ''
    } bg-white rounded-bl-lg w-64 h-72 cursor-pointer`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" className="w-10 h-10 mb-4" />
    <p className="text-lg font-bold text-center capitalize">{item}</p>
  </button>
);

export default BodyPart;
