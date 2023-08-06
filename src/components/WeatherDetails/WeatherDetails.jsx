import WeatherCharts from '../WeatherCharts/WeatherCharts';
import WeatherDataTable from '../WeatherDataTable/WeatherDataTable';
import './WeatherDetails.css';

const WeatherDetails = () => (
  <section className="weather-details">
    <h2>Weather Details</h2>
    <WeatherDataTable />
    <WeatherCharts />
  </section>
);

export default WeatherDetails;
