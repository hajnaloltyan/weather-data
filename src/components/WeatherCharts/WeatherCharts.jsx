import Humidity from '../Humidity/Humidity';
import Precipitation from '../Precipitation/Precipitation';
import Temperatures from '../Temperatures/Temperatures';

const WeatherCharts = () => (
  <section className="weather-charts">
    <h2>Weather Charts</h2>
    <Temperatures />
    <Precipitation />
    <Humidity />
  </section>
);

export default WeatherCharts;
