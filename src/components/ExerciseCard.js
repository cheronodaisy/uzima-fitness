import React from 'react';
import PlaceholderIcon from '../assets/images/placeholder.jpg';

const ExerciseCard = ({ exercise }) => {
  const { name, category, equipment, images } = exercise;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {images && images.length > 0 ? (
        <img src={images[0].image} alt={name} className="w-full h-auto rounded-lg mb-4" />
      ) : (
        <img src={PlaceholderIcon} alt="Placeholder" className="w-full h-auto rounded-lg mb-4" />
      )}
      <div>
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Category:</span> {category && category.name}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Equipment:</span> {equipment && equipment.map(item => item.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default ExerciseCard;
