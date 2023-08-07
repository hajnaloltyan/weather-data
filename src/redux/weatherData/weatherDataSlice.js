import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY_WEATHER;

const initialState = {
  dates: [],
  minTemps: [],
  maxTemps: [],
  humidities: [],
  precips: [],
  conditions: [],
  descriptions: [],
  icons: [],
  loading: false,
  error: null,
};

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async ({ lat, lon }) => {
    try {
      const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/last14days?unitGroup=metric&key=${apiKey}&include=days&elements=datetime,tempmax,tempmin,humidity,precip,conditions,description,icon`);
      return response.data.days.reverse();
    } catch (err) {
      throw err.message;
    }
  },
);

const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.dates = action.payload.map((data) => data.datetime.replace(/-/g, '.'));
        state.minTemps = action.payload.map((data) => data.tempmin);
        state.maxTemps = action.payload.map((data) => data.tempmax);
        state.humidities = action.payload.map((data) => data.humidity);
        state.precips = action.payload.map((data) => data.precip);
        state.conditions = action.payload.map((data) => data.conditions);
        state.descriptions = action.payload.map((data) => data.description);
        state.icons = action.payload.map((data) => data.icon);
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getWeatherLoading = (state) => state.weatherData.loading;
export const getWeatherError = (state) => state.weatherData.error;
export const getDates = (state) => state.weatherData.dates;
export const getMinTemps = (state) => state.weatherData.minTemps;
export const getMaxTemps = (state) => state.weatherData.maxTemps;
export const getHumidities = (state) => state.weatherData.humidities;
export const getPrecips = (state) => state.weatherData.precips;
export const getConditions = (state) => state.weatherData.conditions;
export const getDescriptions = (state) => state.weatherData.descriptions;
export const getIcons = (state) => state.weatherData.icons;

export default weatherDataSlice.reducer;
