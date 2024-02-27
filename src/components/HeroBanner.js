import React from 'react';
import HeroBannerImage from '../assets/images/banner.jpeg';

const HeroBanner = () => (
  <div className="mt-12 lg:mt-32 ml-8 sm:ml-12 md:ml-20">
    <h1 className="text-green-600 font-semibold text-4xl lg:text-6xl mb-6">Uzima Fitness</h1>
    <h2 className="font-bold text-4xl lg:text-6xl mb-6">
      Workout <br />
      And Stay Healthy
    </h2>
    <p className="text-lg lg:text-2xl font-serif mb-8">
      Explore a wide range of exercises for you!
   </p>
    <a href="#ExerciseList" className="inline-block bg-yellow-600 text-white py-4 px-8 rounded-lg text-lg lg:text-xl font-semibold hover:bg-yellow-700 transition duration-300">Explore Exercises</a>
    <h3 className="font-semibold text-yellow-600 opacity-10 lg:block hidden text-9xl absolute top-0 right-0 mr-32 mt-12">Exercise</h3>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img mt-8 lg:mt-16" />
  </div>
);

export default HeroBanner;
