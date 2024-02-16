import { createSlice } from '@reduxjs/toolkit';

const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    workouts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setWorkouts(state, action) {
      state.workouts = action.payload;
    },
    addWorkout(state, action) {
      state.workouts.push(action.payload);
    },
    deleteWorkout(state, action) {
      state.workouts = state.workouts.filter(workout => workout.id !== action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setWorkouts, addWorkout, deleteWorkout, setLoading, setError } = workoutSlice.actions;
export default workoutSlice.reducer;
