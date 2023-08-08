import {
  expect, describe, it,
} from 'vitest';
import {
  AllSearches, getLoading, getError, getSelectedLocation,
} from '../redux/search/searchSlice';

describe('searchSlice', () => {
  it('should select placeNames', () => {
    const state = { search: { placeNames: [{ name: 'City 1' }, { name: 'City 2' }] } };
    const result = AllSearches(state);
    expect(result).toEqual([{ name: 'City 1' }, { name: 'City 2' }]);
  });

  it('should select loading', () => {
    const state = { search: { loading: true } };
    const result = getLoading(state);
    expect(result).toEqual(true);
  });

  it('should select error', () => {
    const state = { search: { error: 'An error occurred.' } };
    const result = getError(state);
    expect(result).toEqual('An error occurred.');
  });

  it('should select selectedLocation', () => {
    const state = { search: { selectedLocation: 'New York' } };
    const result = getSelectedLocation(state);
    expect(result).toEqual('New York');
  });
});
