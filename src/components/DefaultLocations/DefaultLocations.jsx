import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWeatherData } from '../../redux/weatherData/weatherDataSlice';
import { setLocation } from '../../redux/search/searchSlice';

const locations = [
  {
    name: 'New York City', lat: '40.7128', lon: '-74.0060', country: 'USA',
  },
  {
    name: 'Los Angeles', lat: '34.0522', lon: '-118.2437', country: 'USA',
  },
  {
    name: 'Budapest', lat: '47.4979', lon: '19.0402', country: 'Hungary',
  },
  {
    name: 'Paris', lat: '48.8566', lon: '2.3522', country: 'France',
  },
  {
    name: 'London', lat: '51.5074', lon: '-0.1278', country: 'United Kingdom',
  },
  {
    name: 'Tokyo', lat: '35.6895', lon: '139.6917', country: 'Japan',
  },
  {
    name: 'Sydney', lat: '-33.8688', lon: '151.2093', country: 'Australia',
  },
  {
    name: 'Rome', lat: '41.9028', lon: '12.4964', country: 'Italy',
  },
  {
    name: 'Rio de Janeiro', lat: '-22.9068', lon: '-43.1729', country: 'Brazil',
  },
  {
    name: 'Cape Town', lat: '-33.9249', lon: '18.4241', country: 'South Africa',
  },
];

const DefaultLocations = () => {
  const dispatch = useDispatch();

  const handleSelection = (name, lat, lon) => {
    dispatch(fetchWeatherData({ lat, lon }));
    dispatch(setLocation(name));
  };

  return (
    <div className="popular-wrapper">
      <h2>Popular Locations</h2>
      <div className="location-grid">
        {locations.map(({
          name, lat, lon, country,
        }) => (
          <Link key={name} to="details/all-details">
            <button
              onClick={() => handleSelection(name, lat, lon)}
              type="button"
              className="location-button"
            >
              {name}
              ,
              {' '}
              {country}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DefaultLocations;
