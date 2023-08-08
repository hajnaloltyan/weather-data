import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search/searchSlice';
import weatherDataReducer from './weatherData/weatherDataSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    weatherData: weatherDataReducer,
  },
});

export default store;
