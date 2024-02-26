import React from 'react';
//import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from  "../components/SearchExercises";
//import ExerciseDetail from  '../pages/ExerciseDetail';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <SearchExercises />
    </div>
  );
};

export default Home;
