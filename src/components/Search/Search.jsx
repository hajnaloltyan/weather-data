import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';
import { fetchPlaceNames, AllSearches, setLocation } from '../../redux/search/searchSlice';
import { fetchWeatherData } from '../../redux/weatherData/weatherDataSlice';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const placeNames = useSelector(AllSearches);
  useEffect(() => {
    if (query.trim() !== '' && query.length > 2) {
      dispatch(fetchPlaceNames(query));
    }
  }, [dispatch, query]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
  };

  const handleSelectLocation = (name, lat, lon) => {
    dispatch(fetchWeatherData({ lat, lon }));
    setQuery('');
    dispatch(setLocation(name));
  };

  const renderPlaceNames = (places) => {
    if (places.length === 0 || query.trim() === '') {
      return null;
    }

    return (
      <ul className="searchResults">
        {places.map(({
          id, lat, lon, name, state, country,
        }) => (
          <li key={id}>
            <Link to="details/options">
              <button
                type="button"
                className="searchItem"
                onClick={() => handleSelectLocation(name, lat, lon)}
              >
                {name}
                ,
                {' '}
                {state}
                ,
                {' '}
                {country}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="header-border">
      <div className="wrapper">
        <h1 className="pageTitle">Weather Data</h1>
        <nav className="home">
          <NavLink to="/">
            <BsFillHouseFill size={25} />
          </NavLink>
        </nav>
      </div>
      <div className="searchContainer">
        <p>Please select a location:</p>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a place..."
          className="searchInput"
        />
        {renderPlaceNames(placeNames)}
      </div>
    </div>
  );
};

export default Search;
