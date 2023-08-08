import {
  beforeEach, describe, expect, test, vi,
} from 'vitest';
import axios from 'axios';
import {
  fetchWeatherData,
  getWeatherLoading,
  getWeatherError,
  getDates,
  getMinTemps,
} from '../redux/weatherData/weatherDataSlice';

vi.mock('axios');

describe('weatherDataSlice', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  describe('fetchWeatherData', () => {
    test('handles fetch weather data failure', async () => {
      const lat = 40.7128;
      const lon = -74.0060;
      const errorMessage = 'Request failed';

      axios.get.mockRejectedValue(new Error(errorMessage));

      try {
        await fetchWeatherData({ lat, lon });
      } catch (error) {
        expect(axios.get).toHaveBeenCalledWith(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/last14days?unitGroup=metric&key=YOUR_API_KEY&include=days&elements=datetime,tempmax,tempmin,humidity,precip,conditions,description,icon`);
        expect(error.message).toEqual(errorMessage);
      }
    });
  });
});

describe('Selectors', () => {
  test('selects weather loading', () => {
    const state = { weatherData: { loading: true } };
    const result = getWeatherLoading(state);
    expect(result).toEqual(true);
  });

  test('selects weather error', () => {
    const state = { weatherData: { error: 'An error occurred.' } };
    const result = getWeatherError(state);
    expect(result).toEqual('An error occurred.');
  });

  test('selects dates', () => {
    const state = { weatherData: { dates: ['2023-08-01', '2023-08-02'] } };
    const result = getDates(state);
    expect(result).toEqual(['2023-08-01', '2023-08-02']);
  });

  test('selects min temperatures', () => {
    const state = { weatherData: { minTemps: [15, 18] } };
    const result = getMinTemps(state);
    expect(result).toEqual([15, 18]);
  });
});
