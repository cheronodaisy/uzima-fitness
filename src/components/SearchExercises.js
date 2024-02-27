import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/fetchData';
import ExerciseCard from './ExerciseCard';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetchData('https://wger.de/api/v2/exerciseinfo');
      if (response && response.results) {
        setExercises(response.results);
        setFilteredExercises(response.results);
      }
    };
    fetchExercises();
  }, []);

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredExercises(exercises);
    } else {
      const filteredResults = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(search.toLowerCase()) ||
        exercise.category.name.toLowerCase().includes(search.toLowerCase()) ||
        exercise.equipment.some(equipment =>
          equipment.name.toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredExercises(filteredResults);
    }
  }, [search, exercises]);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <div className="p-4">
        <h2 className="font-bold text-yellow-600 text-2xl lg:text-5xl mb-4 text-center">What Are You Looking For?</h2>
    <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search Exercises"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      
      <div className="flex overflow-x-auto space-x-4">
        {filteredExercises.map(exercise => (
          <div key={exercise.id}>
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchExercises;

