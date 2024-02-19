import { createSlice } from '@reduxjs/toolkit';

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exercises: [],
    loading: false,
    error: null,
  },
  reducers: {
    setExercises(state, action) {
      state.exercises = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setExercises, setLoading, setError } = exerciseSlice.actions;

export default exerciseSlice.reducer;
