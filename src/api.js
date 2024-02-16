// api.js

import axios from 'axios';

const BASE_URL = 'https://wger.de/api/v2';

export const fetchExercises = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/exercise/`);
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch exercises');
  }
};
