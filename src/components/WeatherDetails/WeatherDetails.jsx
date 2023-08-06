import WeatherCharts from '../WeatherCharts/WeatherCharts';
import WeatherDataTable from '../WeatherDataTable/WeatherDataTable';

const WeatherDetails = () => (
  <section className="weather-details">
    <h2>Weather Details</h2>
    <WeatherDataTable />
    <WeatherCharts />
  </section>
);

export default WeatherDetails;
