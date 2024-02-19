import React from 'react';
import ExerciseList from './components/ExerciseList';
import WorkoutForm from './components/WorkoutForm';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <ExerciseList />
      <WorkoutForm />
      <UserProfile />
    </div>
  );
};

export default App;
