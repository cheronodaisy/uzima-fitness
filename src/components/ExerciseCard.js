import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link to={`/exercise/${exercise.id}`} className="exercise-card flex flex-col items-start bg-white rounded-lg shadow-md overflow-hidden">
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="w-full h-auto" />
    <div className="flex gap-4 ml-4 mt-2">
      <button className="px-4 py-1 bg-red-500 text-white text-sm rounded-full">{exercise.bodyPart}</button>
      <button className="px-4 py-1 bg-yellow-500 text-white text-sm rounded-full">{exercise.target}</button>
    </div>
    <p className="text-black font-bold text-lg ml-4 mt-2">{exercise.name}</p>
  </Link>
);

export default ExerciseCard;
