import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

const apiKey = import.meta.env.VITE_API_KEY_GEO;

const initialState = {
  placeNames: [],
  selectedLocation: '',
  loading: false,
  error: null,
};

export const fetchPlaceNames = createAsyncThunk(
  'weather/fetchPlaceNames',
  async (query) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${query.trim()}&limit=5&appid=${apiKey}`);
      const placesWithId = response.data.map((place) => ({
        ...place,
        id: nanoid(),
      }));

      return placesWithId;
    } catch (err) {
      return err.message;
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.selectedLocation = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaceNames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaceNames.fulfilled, (state, action) => {
        state.loading = false;
        state.placeNames = action.payload;
      })
      .addCase(fetchPlaceNames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const AllSearches = (state) => state.search.placeNames;
export const getLoading = (state) => state.search.loading;
export const getError = (state) => state.search.error;
export const getSelectedLocation = (state) => state.search.selectedLocation;

export const { setLocation } = searchSlice.actions;

export default searchSlice.reducer;
