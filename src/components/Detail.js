import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex gap-10 p-5 lg:flex-row flex-col items-center">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl lg:text-6xl font-bold capitalize">{name}</h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Exercises keep you fit. <span className="capitalize">{name}</span> squats is one
          of the best <br /> exercises to target your {target}. It will help you improve your <br /> mood and gain energy.
        </p>
        {extraDetail?.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <button className="flex items-center justify-center bg-yellow-200 rounded-full w-16 h-16">
              <img src={item.icon} alt={bodyPart} className="w-8 h-8" />
            </button>
            <p className="text-xl lg:text-2xl capitalize">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
