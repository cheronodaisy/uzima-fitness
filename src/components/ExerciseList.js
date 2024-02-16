import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExercises, setLoading, setError } from './exerciseSlice';
import { fetchExercises } from './api'; 
const ExerciseList = () => {
  const exercises = useSelector(state => state.exercise.exercises);
  const loading = useSelector(state => state.exercise.loading);
  const error = useSelector(state => state.exercise.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    fetchExercises()
      .then(response => {
        dispatch(setExercises(response.data));
      })
      .catch(error => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
