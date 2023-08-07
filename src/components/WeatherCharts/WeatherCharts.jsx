import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Humidity from '../Humidity/Humidity';
import Precipitation from '../Precipitation/Precipitation';
import Temperatures from '../Temperatures/Temperatures';

const WeatherCharts = () => (
  <section className="weather-charts">
    <Link to="/details">
      <button className="go-back" type="button">
        <FaArrowLeft />
        <h4>Go Back</h4>
      </button>
    </Link>
    <h2>Weather Charts</h2>
    <Temperatures />
    <Precipitation />
    <Humidity />
  </section>
);

export default WeatherCharts;
