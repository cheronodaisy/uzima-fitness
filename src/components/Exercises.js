/*import React, { useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../api/fetchData';

const Exercises = ({exercise, bodyPart }) => {

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://wger.de/api/v2/exercise/', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://wger.de/api/v2/muscle/${bodyPart}`, exerciseOptions);
      }

    };
    

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div id="exercises" className="mt-20 px-4 lg:px-0">
      <h2 className="text-3xl lg:text-5xl font-bold mb-10">Showing Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {exercise && <ExerciseCard exercise={exercise} />}
      </div>
    </div>
  );
};

export default Exercises;
*/