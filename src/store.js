import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './reducers/exerciseSlice';
import workoutReducer from './reducers/workoutSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    workout: workoutReducer,
    user: userReducer,
  },
});

export default store;
