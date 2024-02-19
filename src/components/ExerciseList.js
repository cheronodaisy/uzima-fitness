import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExercises } from '../api';
import { setExercises, setLoading, setError } from '../reducers/exerciseSlice';

const ExerciseList = () => {
  const exercises = useSelector(state => state.exercise.exercises);
  const loading = useSelector(state => state.exercise.loading);
  const error = useSelector(state => state.exercise.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    fetchExercises()
      .then(data => {
        dispatch(setExercises(data));
      })
      .catch(err => {
        dispatch(setError(err.message));
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
      <h2 className="text-2xl font-bold m-4">Exercise List</h2>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id} className="m-2">{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
