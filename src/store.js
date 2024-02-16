import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './reducers/exerciseSlice';

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    // Add more reducers here if needed
  },
});

export default store;
