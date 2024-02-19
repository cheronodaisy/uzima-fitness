import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../reducers/workoutSlice';

const WorkoutForm = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addWorkout({ exercise, sets, reps, weight }));
    setExercise('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Add Workout</h2>
      <div className="mb-4">
        <label className="block mb-2">Exercise:</label>
        <input type="text" value={exercise} onChange={e => setExercise(e.target.value)} className="w-full px-4 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Sets:</label>
        <input type="text" value={sets} onChange={e => setSets(e.target.value)} className="w-full px-4 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Reps:</label>
        <input type="text" value={reps} onChange={e => setReps(e.target.value)} className="w-full px-4 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Weight:</label>
        <input type="text" value={weight} onChange={e => setWeight(e.target.value)} className="w-full px-4 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
