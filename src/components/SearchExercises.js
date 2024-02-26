import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  // eslint-disable-next-line
  const [exercises, setExercises] = useState([])
  // eslint-disable-next-line
  const [exerciseCategory, setExerciseCategory] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const response = await fetchData('https://wger.de/api/v2/exercisecategory');
        const exerciseCategoryData = response.results; // Accessing the 'results' property
        console.log(exerciseCategoryData);
  
        setExerciseCategory(['all', ...exerciseCategoryData]);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
        // Handle errors
      }
    };
  
    fetchExercisesData();
  }, []);
  

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesDataResponse = await fetchData('https://wger.de/api/v2/exerciseinfo');
        const exercisesData = exercisesDataResponse.results;
  
        const searchedExercises = exercisesData.filter((item) => {
          // Convert name, and category to lowercase for case-insensitive search
          const lowerCaseSearch = search.toLowerCase();
          const lowerCaseName = item.name.toLowerCase();
          const lowerCaseCategory = item.category.name.toLowerCase();
  
          // Check if name, or category match the search criteria
          if (
            lowerCaseName.includes(lowerCaseSearch) ||
            lowerCaseCategory.includes(lowerCaseSearch)
          ) {
            return true;
          }
  
          // Check if any equipment matches the search criteria
          const equipmentMatch = item.equipment.some((equipmentItem) =>
            equipmentItem.name.toLowerCase().includes(lowerCaseSearch)
          );
  
          return equipmentMatch;
        });
        console.log('Searched Exercises:', searchedExercises);
  
        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Error fetching exercises data:', error);
        // Handle errors
      }
    }
  };
  
  

  return (
    <div className="flex flex-col items-center mt-8 p-5">
      <h2 className="font-bold text-2xl lg:text-5xl mb-4 text-center">Find More Exercises</h2>
      <div className="relative mb-12">
        <input
          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-full focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <button
          className="search-btn bg-yellow-600 text-white text-lg font-semibold rounded-full px-6 py-3 mr-2 absolute focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="relative w-full p-5">
      </div>
    </div>
  );
};

export default SearchExercises;
